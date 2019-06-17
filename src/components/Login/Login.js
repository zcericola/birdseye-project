import React from 'react';
import { Redirect } from 'react-router-dom';
import useStyles from './loginStyles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import logo from '../../assets/birdseye_logo.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Login = (props) => {

    const signIn = () => () => {
        //sign in logic here
        //validate inputs and if valid, allow user to login
        return props.history.push('/dashboard');
    };
    const {
        loginContainer
        , formContainer
        , bgContainer
        , formFieldsContainer
        , formField
        , header
        , title
        , primaryBtn
        , secondaryBtn
        , label
        , textFieldWrapper
        , passwordLink
        , birdsEyeLogo
        , loginBtn
        , signInButton

    } = useStyles();
    return (
        <Grid container justify='center' alignItems='center' className={loginContainer}>
            <Grid
                container
                className={formContainer}
                xs={12} md={5}
                justify='flex-start'
                direction='column'
                alignItems='center'
                spacing={2}

            >
                <Grid item
                    className={header}
                >
                    <img src={logo}
                        className={birdsEyeLogo}
                        alt='Birdseye logo'
                    />
                    <Typography
                        variant='h5'
                        spacing={5}
                        className={title}
                    >
                        Welcome to Birdseye!
                    </Typography>

                </Grid>
                <Grid container
                    direction='column'
                    justify='center'
                    alignItems='center'
                    className={formFieldsContainer}
                >
                    <Grid item
                        className={textFieldWrapper}
                    >
                        <label className={label}>Email Address</label>
                        <TextField
                            className={formField}
                            fullWidth
                            variant='outlined'
                            margin='dense'
                        />
                    </Grid>
                    <Grid item
                        className={textFieldWrapper}
                    >
                        <label className={label}>Password</label>
                        <TextField
                            className={formField}
                            fullWidth
                            type='password'
                            variant='outlined'
                            margin='dense'
                        />
                    </Grid>
                    <Button
                        variant='outlined'
                        className={loginBtn}
                        color='black'
                        margin='normal'
                        onClick={signIn()}
                    >
                        Sign In
                    </Button>
                    <Button
                        variant='outlined'
                        className={loginBtn}
                        margin='normal'
                        color='#fff'

                    >
                        Create An Account
                    </Button>
                    <Button
                        spacing={2}
                        component='span'
                        className={passwordLink}>
                        Forgot Password
                    </Button>



                </Grid>
            </Grid>
            <Grid
                item xs={12} md={7}
                className={bgContainer}
            >
            </Grid>


        </Grid >
    );

};

export default Login;