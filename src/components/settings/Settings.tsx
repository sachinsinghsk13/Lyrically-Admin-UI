import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import NavigationSettings from "./navigation-settings/NavigationSettings";

const Settings = (props: any) => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/navigation-settings`} component={NavigationSettings} />
            <Redirect path={path} exact to={`${path}/navigation-settings`} />
        </Switch>
    );
}

export default Settings;