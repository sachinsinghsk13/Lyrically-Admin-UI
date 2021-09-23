import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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

    const { path } = useRouteMatch();

    return (
        <Container fluid className="p-2">
            <Row>
                <Col lg="12" className="p-2 d-flex justify-content-between align-items-center">
                    <h3>Navigation Menus</h3>
                    <Link className="btn btn-success btn-lg" to={`${path.substr(0, path.lastIndexOf('/'))}/add-menu`}>Add Menu</Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    {menus.map(menu => {
                        return <Row key={menu._id} className="my-2 border rounded p-3">
                            <Col xl={1} className="d-flex flex-column justify-content-center align-items-center">
                                <i className={`${menu.icon} fa-2x m-1`}></i>
                                <span>{menu.icon}</span>
                            </Col>
                            <Col xl={3} className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="m-0">{menu.title}</h5>
                                <h6 className="m-0 text-muted">{menu.path}</h6>
                            </Col>
                            <Col xl={3} className="d-flex flex-column justify-content-center align-items-center">
                                {menu.hasSubmenu ? <span className="text-secondary">Collapsable Menus [{menu.submenu.length} Submenus]</span> : <span className="text-secondary">Direct Link</span>}
                            </Col>
                            <Col xl={3} className="d-flex  justify-content-center align-items-center">
                                <button className="btn btn-success mx-1"><i className="fas fa-edit"></i></button>
                                <button className="btn btn-danger mx-1"><i className="fas fa-trash"></i></button>
                            </Col>
                        </Row>
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default NavigationMenuList;