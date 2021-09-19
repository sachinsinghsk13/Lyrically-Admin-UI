import axios from "axios";
import { useEffect, useState } from "react";
import { Breadcrumb, Col, Container, Row, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Constants from "../../../utils/Constants";
import { MenuItem } from "../../navigation/Sidebar";
const NavigationMenuList = (props: any) => {
    const [menus, setMenus] = useState<MenuItem[]>([]);
    console.log(menus);
    useEffect(() => {
        const fetchMenus = async () => {
            let res = await axios.get(`${Constants.BASE_URL}/admin/webmenus`);
            if (res.status === 200)
                setMenus(res.data.data);
        }
        fetchMenus();
    }, []);

    useEffect(() => {
        const prevTitle = document.title;
        document.title = "Navigation Settings";
        return () => { document.title = prevTitle };
    }, []);


    return (
        <Container className="p-2">
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
                        <Breadcrumb.Item href="/navigation-settings" active>Navigation Menu Settings</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col lg="12" className="p-2 d-flex justify-content-between">
                    <h3>Navigation Menus</h3>
                    <Button variant="primary">Add Menu</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table className="table table-borderless">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Path</th>
                                <th>Icon</th>
                                <th>Has Submenu</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menus.map(menu => {
                                    return (
                                        <tr key={menu._id}>
                                            <td>{menu.title}</td>
                                            <td>{menu.path}</td>
                                            <td><i className={menu.icon}></i> {menu.icon}</td>
                                            <td>{menu.hasSubmenu ? 'Yes' : 'No'}</td>
                                            <td><button className="btn btn-success">Modify</button></td>
                                            <td><button className="btn btn-danger">Delete</button></td>
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