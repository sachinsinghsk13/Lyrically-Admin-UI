import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useHistory, useRouteMatch } from 'react-router';
import { useEffect } from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import BSForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import { MenuItem } from "../../navigation/Sidebar";
import axios from "axios";
import Constants from "../../../utils/Constants";

const schema = Yup.object().shape({
    title: Yup.string().required('Menu title is required'),
    path: Yup.string().optional(),
    icon: Yup.string().optional(),
    order: Yup.number().required('Must specify order for this menu item').positive('order must be positive'),
    hasSubmenu: Yup.boolean().default(false).required('hasSubmenu is required'),
    submenu: Yup.array().optional().of(Yup.object().shape({
        title: Yup.string().required('Menu title is required'),
        path: Yup.string().required('Path is requied for submenus'),
        icon: Yup.string().optional(),
        order: Yup.number().optional()
    }))
});

const initialValues: MenuItem = {
    title: '',
    icon: '',
    hasSubmenu: false,
    order: 1,
    path: '',
    submenu: []
};




const NavigationMenuForm = (props: any) => {
    const { path } = useRouteMatch();
    const history = useHistory();
    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Add New Menu";
        return () => { document.title = prevTitle };
    }, []);

    const handleSubmit = async (values: any) => {
        let resp = await axios.post(`${Constants.BASE_URL}/admin/webmenus`,values);
        if (resp.status === 201) {
            console.log('saved');
            console.log(resp);
            history.push(`${path.substr(0, path.lastIndexOf('/'))}/menus-list`)
        } else {
            console.log(resp);
        }
    };

    return (
        <>
            <Row>
                <Col lg="12" className="p-2 d-flex justify-content-between align-items-center">
                    <h3>Add New Menu</h3>
                    <Link className="btn btn-success btn-lg" to={`${path.substr(0, path.lastIndexOf('/'))}/menus-list`}>Back to List</Link>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={schema}>
                        {({ values }) => (
                            <Form>
                                <Row>
                                    <Col>
                                        <BSForm.Group controlId="title" className="mb-3">
                                            <BSForm.Label className="text-muted">Menu Title</BSForm.Label>
                                            <Field className="form-control form-control-lg" name="title" placeholder="Menu Title"></Field>
                                            <ErrorMessage name="title">
                                                {(msg) => <div className="text-danger">{msg}</div>}
                                            </ErrorMessage>
                                        </BSForm.Group>
                                    </Col>
                                    <Col>
                                        <BSForm.Group controlId="path">
                                            <BSForm.Label className="text-muted">Routing Path</BSForm.Label>
                                            <Field className="form-control form-control-lg" name="path" placeholder="React Router Path"></Field>
                                        </BSForm.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <BSForm.Group controlId="icon">
                                            <BSForm.Label className="text-muted">Icon Class</BSForm.Label>
                                            <Field className="form-control form-control-lg" name="icon" placeholder="Icon Class"></Field>
                                        </BSForm.Group>
                                    </Col>
                                    <Col>
                                        <BSForm.Group controlId="order">
                                            <BSForm.Label className="text-muted">Menu Order</BSForm.Label>
                                            <Field as="select" className="form-select form-select-lg" name="order" placeholder="Menu Order">
                                                {Array.from(new Array(20).keys()).map(i => <option key={i} value={i + 1}>{i + 1}</option>)}
                                            </Field>
                                        </BSForm.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="my-3">
                                        <div className="form-check form-switch">
                                            <Field name="hasSubmenu" className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{values.hasSubmenu ? 'Collapsable Menu' : 'Direct Menu'}</label>
                                        </div>
                                    </Col>
                                </Row>
                                {values.hasSubmenu && (
                                    <Row>
                                        <Col className="my-3">
                                            <FieldArray name="submenu" render={(arrayHelpers) => (
                                                values.submenu && values.submenu.length > 0 ? (
                                                    <>
                                                        <h5>Submenus for {values.title}</h5>
                                                        <table className="table table-borderless text-center">
                                                            <thead>
                                                                <tr>
                                                                    <td>Title</td>
                                                                    <td>Path</td>
                                                                    <td>Icon</td>
                                                                    <td>Action</td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>{
                                                                values.submenu.map((menu, index) => (
                                                                    <tr key={index}>
                                                                        <td><Field className="form-control" placeholder="Title" name={`submenu[${index}].title`} /></td>
                                                                        <td><Field className="form-control" placeholder="Path" name={`submenu[${index}].path`} /></td>
                                                                        <td><Field className="form-control" placeholder="Icon" name={`submenu[${index}].icon`} /></td>
                                                                        <td>
                                                                            <i className="fas fa-plus btn btn-primary mx-1"
                                                                                onClick={() => arrayHelpers.insert(index + 1, { title: '', path: '', icon: '' })}></i>
                                                                            <i className="fas fa-minus btn btn-danger mx-1"
                                                                                onClick={() => arrayHelpers.remove(index)}></i>
                                                                        </td>
                                                                        <td><Field type="hidden" name={`submenu[${index}].order`} value={index}/></td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </>
                                                ) : (
                                                    <button onClick={() => arrayHelpers.push({ title: '', path: '', icon: '' })} className="btn btn-secondary btn-sm">Add Submenu</button>
                                                )
                                            )} />

                                        </Col>
                                    </Row>
                                )}
                                <Row>
                                    <Col className="my-3">
                                        <Button variant="primary" type="submit" className="mx-2">Submit</Button>
                                        <Button variant="secondary" type="reset" className="mx-2">Reset</Button>
                                    </Col>
                                </Row>

                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </>
    );
}

export default NavigationMenuForm;