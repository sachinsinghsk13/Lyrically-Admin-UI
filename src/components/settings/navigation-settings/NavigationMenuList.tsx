import axios from "axios";
import { useEffect, useState } from "react";
import { Breadcrumb, Col, Container, Row, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useRouteMatch } from 'react-router';
import Constants from "../../../utils/Constants";
import { MenuItem } from "../../navigation/Sidebar";
const NavigationMenuList = (props: any) => {
    const [menus, setMenus] = useState<MenuItem[]>([]);
    console.log(menus);
    useEffect(() => {
        const fetchMenus = async () => {
            let res = await axios.get(`${Constants.BASE_URL}/admin/webmenus`);
            if (res.status === 200)
                setMenus(res.data);
        }
        fetchMenus();
    }, []);

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Navigation Settings";
        return () => { document.title = prevTitle };
    }, []);

    const { url, path } = useRouteMatch();

    return (
        <Container fluid className="p-2">
            <Row>
                <Col lg="12" className="p-2 d-flex justify-content-between">
                    <h3>Navigation Menus</h3>
                    <Link className="btn btn-primary btn-lg" to={`${path.substr(0, path.lastIndexOf('/'))}/add-menu`}>Add Menu</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table className="table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Path</th>
                                <th>Icon</th>
                                <th>Icon Class</th>
                                <th>Has Submenu</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menus.map(menu => {
                                    return (
                                        <tr key={menu._id}>
                                            <td>{menu.title}</td>
                                            <td>{menu.path}</td>
                                            <td><i className={menu.icon}></i></td>
                                            <td>{menu.icon}</td>
                                            <td>{menu.hasSubmenu ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times text-danger"></i>}</td>
                                            <td>
                                                <button className="btn btn-success mx-1"><i className="fas fa-edit"></i></button>
                                                <button className="btn btn-danger mx-1"><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>


                </Col>
            </Row>
        </Container>
    );
}

export default NavigationMenuList;