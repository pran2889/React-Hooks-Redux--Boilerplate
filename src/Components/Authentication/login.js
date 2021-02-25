import React, { useState } from 'react';
import auth from "./auth";

const Login = (props) => {
    const initialState = {
        username: '',
        password: '',
    }
    const [loginData, setLoginData] = useState(initialState);

    const onChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        auth.login(loginData, () => {
            props.history.push("/dashboard");
        });
    };
    return (
        <button onClick={() => {
            auth.login(loginData, () => {
                props.history.push("/dashboard");
            });
        }}>Login</button>
    );
}

export default Login;