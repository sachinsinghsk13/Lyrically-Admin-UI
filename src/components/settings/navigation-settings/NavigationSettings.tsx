import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Redirect } from "react-router-dom";
import NavigationMenuForm from "./NavigationMenuForm";
import NavigationMenuList from "./NavigationMenuList";

const NavigationSettings = (props: any) => {
    const { path, url } = useRouteMatch();
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
            <Switch>
                <Route path={`${path}/menus-list`} component={NavigationMenuList}/>
                <Route path={`${path}/add-menu`} component={NavigationMenuForm}/>
                <Redirect path={path} exact to={`${path}/menus-list`}/>
            </Switch>
        </Container>
    );
}

export default NavigationSettings;