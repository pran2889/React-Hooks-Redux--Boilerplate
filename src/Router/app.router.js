import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Login = React.lazy(() => import('../Components/Authentication/login'));
const Register = React.lazy(() => import('../Components/Authentication/register'));
const ForgotPassword = React.lazy(() => import('../Components/Authentication/forgotPassword'));
const NotFound = React.lazy(() => import('../Components/Error/notfound'));
const Home = React.lazy(() => import('../Components/layouts/home'));
const ProtectedRoute = React.lazy(() => import('./protected.route'));

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <ProtectedRoute>
              <Route to="/dashboard" component={Home} />
              <Route exact path="/dashboard">
                <Redirect exact from="/dashboard" to="dashboard" />
              </Route>
            </ProtectedRoute>  
            <Route path="*" component={NotFound} /> 
        </Switch>
    );
}
export default AppRouter;