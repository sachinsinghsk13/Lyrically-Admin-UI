import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import '../../styles/main-content.css';
import { Dashboard } from '../dashboard/Dashboard';
import PageNotFound from '../navigation/PageNotFound';
import NavigationMenuList from '../settings/navigation-settings/NavigationMenuList';
export default function MainContent(props: any) {
    let { path, url } = useRouteMatch();
    console.log(path, url);
    return (
        <div  className="main-content p-2">
            <Switch>
                <Redirect exact path="/" to="/dashboard"/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/navigation-settings" component={NavigationMenuList}/>
                <Route path="/" component={PageNotFound}/>
            </Switch>
        </div>
    );
}