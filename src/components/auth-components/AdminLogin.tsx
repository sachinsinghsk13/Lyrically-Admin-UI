import { Field, Form, Formik } from "formik";
import { Col, Container, FloatingLabel, Row } from "react-bootstrap";
import '../../styles/AdminLogin.css'
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { LoginCredentials } from "../../models/authentication-model";
import authService from "../../services/auth-service";
const initialValues = {
    username: '',
    password: ''
}

const schema = Yup.object().shape({
    username: Yup.string().required('Username is requierd'),
    password: Yup.string().required('Password is required')
});

export default function AdminLogin(props: any) {
    const history = useHistory();
    const handleAdminLogin = async (credentials: LoginCredentials) => {
        let result = await authService.login(credentials);
        if (result) {
            history.push('/home');
        } else {
            console.log("login failed");
        }
    }   
    return (
        <Container fluid className="admin-login-container">
            <Row className="justify-content-center">
                <Col sm={12} md={8} lg={6} xl={4} className="d-flex align-items-center justify-content-center">
                    <div className="bg-white p-3 w-100 rounded">
                        <div className="d-flex justify-content-center">
                            <img src="/logo.png" alt="" width="150px" height="80px" />
                        </div>
                        <h3 className="text-center text-dark p-2">Administrative Login</h3>
                        <Formik initialValues={initialValues} onSubmit={handleAdminLogin} validationSchema={schema}>
                            <Form>
                                <div className="mb-2">
                                    <FloatingLabel label="Username" controlId="username" placeholder="Username" className="mb-3">
                                        <Field type="text" name="username" id="username" className="form-control" placeholder="Username" />
                                    </FloatingLabel>
                                </div>
                                <div className="mb-2">
                                    <FloatingLabel label="Password" controlId="password" placeholder="Password" className="mb-3">
                                        <Field type="password" name="password" id="password" className="form-control" placeholder="Password" />
                                    </FloatingLabel>
                                </div>
                                <div className="mb-2 p-2 d-flex justify-content-start">
                                    <button type="submit" className="btn py-3 btn-primary w-100 font-weight-bold">Login</button>
                                </div>
                                <div>
                                    <Link to="/register">Register new admin</Link>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}