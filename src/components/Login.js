import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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

export default class SignIn extends React.Component {
    // const classes = useStyles();
    constructor() {
        super();
        this.state = {
            email: " ",
            password: "",
            token: " "
        }
        this.handleClick = this.handleClick.bind(this);
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
    }

    handleClick() {
        console.log("clicked")
        let opts = {
            "email": this.state.email,
            "password": this.state.password
        };
        console.log(opts)
        fetch('https://slcakes.herokuapp.com/api/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            if (data.success == true) {
                let token = data.token.split(" ")[1]
                console.log(token)
                localStorage.setItem("token", token)
                //location.href = "/dashboard"
                // Redirect to dashboard
                console.log(token)
                this.setState({
                    token: token
                })
            }
            else {

            }
        });
    }

    onEmailChanged(evt) {
        console.log(this.state.email);
        this.setState({
            email: evt.target.value
        })
    }

    onPasswordChanged(evt) {
        console.log(this.state.password)
        this.setState({
            password: evt.target.value
        })
    }

    render() {
        if (this.state.token) {
            return (
                <Redirect to={{
                    pathname: "/dashboard"
                }}
                />
            );
        }
        else {

            return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div >
                        <Avatar >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
            </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={this.state.email}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={this.onEmailChanged}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={this.state.password}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={this.onPasswordChanged}
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleClick}
                        >
                            Sign In
              </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                  </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>
            )
        }
    };
}