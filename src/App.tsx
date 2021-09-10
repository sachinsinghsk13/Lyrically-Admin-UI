import './App.css';
import Constants from './utils/Constants';
import AdminLogin from './components/auth-components/AdminLogin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/auth-components/ProtectedRoute';
import authService from './services/auth-service';
import Home from './components/layout/Test';
import LoginRoute from './components/auth-components/LoginRoute';

function App() {
  console.log(Constants.BASE_URL);
  return (
    <Router>
      <Switch>
        <LoginRoute path="/login" component={AdminLogin} />
        <ProtectedRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
