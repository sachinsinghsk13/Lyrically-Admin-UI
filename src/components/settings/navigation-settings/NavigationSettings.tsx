import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router";
import { Redirect } from "react-router-dom";
import NavigationMenuForm from "./NavigationMenuForm";
import NavigationMenuList from "./NavigationMenuList";

const NavigationSettings = (props: any) => {
    const { path } = useRouteMatch();
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
                 <Route path={`${path}/update-menu/:id`} component={NavigationMenuForm}/>
                 <Redirect path={path} exact to={`${path}/menus-list`}/>
            </Switch>
        </Grid >
    );
}

export default NavigationSettings;