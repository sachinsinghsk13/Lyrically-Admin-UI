import { Redirect, Route, RouteProps } from 'react-router';
import authService from '../../services/auth-service';

export default function ProtectedRoute(props: RouteProps) {
  if(authService.isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Redirect to={{ pathname: '/login'}} />;
  }
};