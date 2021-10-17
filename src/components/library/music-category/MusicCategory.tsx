import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import MusicCategoryForm from "./MusicCategoryForm";
import MusicCategoryList from "./MusicCategoryList";

const MusicCategory = (props: any) => {
    const { path } = useRouteMatch();
    return (
        <Grid container p={2}>
            <Grid item lg={12} py={2}>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/">Dashboard</Link>
                    <Link underline="hover" color="inherit" href="/library/">Library</Link>
                    <Typography color="text.primary">Music Category</Typography>
                </Breadcrumbs>
            </Grid>
            <Switch>
                 <Route path={`${path}/category-list`} component={MusicCategoryList}/>
                 <Route path={`${path}/add-music-category`} component={MusicCategoryForm}/>
                 <Route path={`${path}/update-music-category/:id`} component={MusicCategoryForm}/>
                 <Redirect path={path} exact to={`${path}/category-list`}/>
            </Switch>
        </Grid >
    );
}

export default MusicCategory;