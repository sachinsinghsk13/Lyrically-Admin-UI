import './App.css';
import AdminLogin from './components/auth-components/AdminLogin';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ProtectedRoute from './components/auth-components/ProtectedRoute';
import LoginRoute from './components/auth-components/LoginRoute';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <Router>
      <Switch>
        <LoginRoute path="/login" component={AdminLogin} />
        <ProtectedRoute path="/" component={MainLayout} />
      </Switch>
    </Router>
  );
}

export default App;
