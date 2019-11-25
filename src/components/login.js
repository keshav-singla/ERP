import React from 'react'

//Material-UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';

// Icon's
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';

//Firebase
import fire from '../config.js/fireBaseConfiguration'

//Redux
import { userSignIn } from '../actions/createUser'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

//React components
import Topbar from './bar';

//React-router
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (userData) => {
        fire.auth().signInWithEmailAndPassword(userData.email, userData.password)

            // Response of the API
            .then(response => {
                console.log(response);
                console.log(response.user);
                console.log(response.user.refreshToken);

                this.setState({
                    error: ''
                })
                this.props.userSignIn(response.user.refreshToken)

            })


            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                this.setState({
                    error: errorMessage,
                })

                console.log(errorCode);
                console.log(this.state.error);
            });
    }

    render() {
        console.log(this.props.task);
        return (
            <div>

                <Grid
                    container
                    spacing={50}
                >

                    <Grid item xs={12}>
                        <Topbar />
                    </Grid>

                    <Grid
                        item xs={3}
                    >

                    </Grid>


                    <Grid
                        item xs={6}
                    >
                        <Paper style={{ padding: 20 }} >

                            <TextField
                                label="E-mail"
                                style={{ margin: 8 }}
                                placeholder="xyz@gmail.com"
                                name='email'
                                onChange={this.handleChange}
                                fullWidth
                                margin="dense"
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <TextField
                                label='Password'
                                style={{ margin: 8 }}
                                placeholder="Password"
                                name='password'
                                type='password'
                                onChange={this.handleChange}
                                fullWidth
                                margin="dense"
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpenTwoToneIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <Button
                                variant="contained"
                                color='primary'
                                onClick={() => this.handleSubmit({ email: this.state.email, password: this.state.password })}
                            >
                                Sign in
                                </Button> <br />

                         
                            <Link to="/signup"> New User? Signup </Link>
                      

                            <br />

                            {this.state.error}
                        </Paper>

                    </Grid>

                    <Grid item xs={3} >

                    </Grid>

                </Grid>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userSignIn }, dispatch)
}

function mapStateToProps(state) {
    return {
        task: state.user
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Login);