import { Redirect, Route, Switch } from 'react-router';
import '../../styles/main-content.css';
import { Dashboard } from '../dashboard/Dashboard';
import Library from '../library/library';
import PageNotFound from '../navigation/PageNotFound';
import Settings from '../settings/Settings';
export default function MainContent(props: any) {
    return (
        <div  className="main-content p-2">
            <Switch>
                <Redirect exact path="/" to="/dashboard"/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/library" component={Library}/>
                <Route path="/" component={PageNotFound}/>
            </Switch>
        </div>
    );
}