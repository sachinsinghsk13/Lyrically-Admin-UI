import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router";
import { Redirect } from "react-router-dom";
import NavigationMenuForm from "./NavigationMenuForm";
import NavigationMenuList from "./NavigationMenuList";

const NavigationSettings = (props: any) => {
    const { path, url } = useRouteMatch();
    return (
        <Grid container p={2}>
            <Grid item lg={12} py={2}>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/">Dashboard</Link>
                    <Link underline="hover" color="inherit" href="/settings/">Settings</Link>
                    <Typography color="text.primary">Navigation Settings</Typography>
                </Breadcrumbs>
            </Grid>
            <Switch>
                 <Route path={`${path}/menus-list`} component={NavigationMenuList}/>
                 <Route path={`${path}/add-menu`} component={NavigationMenuForm}/>
                 <Redirect path={path} exact to={`${path}/menus-list`}/>
            </Switch>
        </Grid >

        // <Container className="p-2">
        //     <Row>
        //         <Col>
        //         <Breadcrumbs>
        //             <Typography color="text.primary">Dashboard</Typography>
        //         </Breadcrumbs>
        //             <Breadcrumb>
        //                 <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
        //                 <Breadcrumb.Item href="/navigation-settings" active>Navigation Menu Settings</Breadcrumb.Item>
        //             </Breadcrumb>
        //         </Col>
        //     </Row>
        //     <Switch>
        //         <Route path={`${path}/menus-list`} component={NavigationMenuList}/>
        //         <Route path={`${path}/add-menu`} component={NavigationMenuForm}/>
        //         <Redirect path={path} exact to={`${path}/menus-list`}/>
        //     </Switch>
        // </Container>
    );
}

export default NavigationSettings;