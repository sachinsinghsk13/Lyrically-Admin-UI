import { Redirect, Route, Switch } from 'react-router';
import '../../styles/main-content.css';
import { Dashboard } from '../dashboard/Dashboard';
import PageNotFound from '../navigation/PageNotFound';
import NavigationSettings from '../settings/navigation-settings/NavigationSettings';
export default function MainContent(props: any) {
    return (
        <div  className="main-content p-2">
            <Switch>
                <Redirect exact path="/" to="/dashboard"/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/navigation-settings" component={NavigationSettings}/>
                <Route path="/" component={PageNotFound}/>
            </Switch>
        </div>
    );
}