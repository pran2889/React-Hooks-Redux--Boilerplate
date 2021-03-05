import { Route, Redirect } from "react-router-dom";
import auth from "../Components/Authentication/auth";
const ProtectedRoute = ({ children, ...rest }) => {
    return (
        <Route {...rest} render={
            (props) => {
                if (auth.isAuthenticated()) {
                    return children
                } else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />
    );
}
export default ProtectedRoute;