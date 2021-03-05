import React from "react";
import { withRouter, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { CssBaseline, Paper, TextField} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
    },
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    input: {
        margin: theme.spacing(3, 0, 2),
        "&:invalid": {
            border: "red solid 2px"
        }
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      padding: '16px',
    },
    submit: {
      margin: theme.spacing(3, 0, 3),
    },
  }));

const ForgotPassword = (props) => {
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
        swal({
            title: "Success",
            text: "Password Reset Link Send Successfully",
            icon: "success",
          })
          .then(() =>{
              props.history.push("/login")
        });
    }

    return (
        <Container className={classes.root} component="main" maxWidth="sm">
        <CssBaseline />
        <Typography component="h1" variant="h5" >
                 Forgot Password
        </Typography>
            <div className={classes.paper}>
            <Paper elevation="0" >
                <form className={classes.form} onSubmit={handleSubmit} validate>   
                    <Typography component="h1" variant="h6">Lost your password? 
                        Please enter your registered email address. 
                        You will receive a link to create a new password via email.
                    </Typography>         
                        <TextField
                            className={classes.input}
                            type="email"
                            fullWidth
                            required={true}
                            id="input-with-icon-textfield"
                            label="Email Address"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment  position="start">
                                    <MailTwoToneIcon 
                                // style={{ color: "lawngreen" }} 
                                    fontSize="medium"/>
                                </InputAdornment>
                                ),
                            }}                            
                            variant="filled"
                            color="primary"
                        />
                        
                    <Button
                        type="submit"
                        width="50%"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                    Reset Password
                    </Button>
                    <Grid container >
                        <Grid item xs>Remember your Password?
                        <Link to="/login" variant="body2">
                             Go to Sign in
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    </Container>
    );
};

export default withRouter(ForgotPassword);