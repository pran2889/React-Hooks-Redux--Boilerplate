import auth from "./auth";
import { withRouter } from "react-router-dom";
const ForgotPassword = (props) => {
    return (
        <>
            <h1>Forgot Password</h1>
            <button onClick={() => {
                auth.logout(() => {
                    props.history.push("/");
                });
            }}>Logout</button>
        </>
    );
};

export default withRouter(ForgotPassword);