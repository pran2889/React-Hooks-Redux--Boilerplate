import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import auth from "./auth";


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
        "&:invalid": {
            border: "red solid 2px"
        }
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = (props) => {
    const classes = useStyles();
    const initialState = {
        email: '',
        password: '',
    }
    const [loginData, setLoginData] = useState(initialState);

    const handleFormChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        auth.login(loginData, () => {
           props.history.push("/dashboard");          
        });
    };
       
  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                 <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                 Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit} validate="true">
            <TextField  
                type="email"             
                variant="outlined"
                margin="normal"                
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email" 
                onChange={handleFormChange}               
                required
                autoFocus

            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleFormChange}
                autoComplete="current-password"
                required = {true}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                <Link to="/forgot-password" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                Don't have an account?
                <Link to="/register" variant="body2">
                     Sign Up
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
    </Container>
  );
};

export default Login;	

