import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import '../../styles/main-content.css';
import { Dashboard } from '../dashboard/Dashboard';
import AppNavbar from '../navigation/Navbar';
export default function MainContent(props: any) {
    let { path, url } = useRouteMatch();
    console.log(path, url);
    return (
        <div  className="main-content">
            <Switch>
                <Redirect exact path="/" to="/dashboard"/>
                <Route path="/dashboard" component={Dashboard as any}/>
            </Switch>
        </div>
    );
}