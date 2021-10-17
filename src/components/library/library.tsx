import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import MusicCategory from "./music-category/MusicCategory";

const Library = (props: any) => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/music-categories`} component={MusicCategory} />
            <Redirect path={path} exact to={`${path}/music-categories`} />
        </Switch>
    );
}

export default Library;