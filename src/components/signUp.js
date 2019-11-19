import React from 'react';

// Material UI core
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';

//Icons
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';

//Firebase
import fire from '../config.js/fireBaseConfiguration'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: ''
        }
    }

    formEmpty = ({ username, email, password, confirmPassword }) => {
        return !username.length || !email.length || !password.length || !confirmPassword.length
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (userData) => {
        // debugger
        console.log(userData);
        // if (this.validation()) {
            fire.auth().createUserWithEmailAndPassword(userData.email, userData.password)
                .then(response => {
                    console.log(response);
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    console.log(errorCode);
                    console.log(errorMessage);
                });
        // }
    }

    passwordValidation = ({ password, confirmPassword }) => {
        if (password.length >= 6 && password === confirmPassword) {
            console.log('Password valid');
            return false;
        }

        else {
            return true;
        }
    }

    validation = () => {
        console.log(this.state)
        if (this.formEmpty(this.state)) {
            // this.setState({
            //     error: 'All feilds are mandatory to be filled'
            // })
        }

        else if (this.passwordValidation(this.state)) {
            this.setState({
                error: 'Password must be same and longer than 6 digits'
            })
        }
    }

    render() {
        console.log(this.state.firstName);
        return (
            <div>
                <Grid
                    container
                    spacing={50}
                >
                    <Grid
                        item xs={3}
                    >
                    </Grid>

                    <Grid
                        item xs={6}
                    >
                        <Paper style={{ padding: 20 }} >

                            <TextField
                                label="First Name"
                                style={{ margin: 8 }}
                                placeholder="First Name"
                                name='firstName'
                                onChange={this.handleChange}
                                fullWidth
                                margin="dense"
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonPinTwoToneIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <TextField
                                label="Last Name"
                                style={{ margin: 8 }}
                                placeholder="Last Name"
                                name='lastName'
                                onChange={this.handleChange}
                                fullWidth
                                margin="dense"
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonPinTwoToneIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <TextField
                                label="Username"
                                style={{ margin: 8 }}
                                placeholder="username"
                                name='Username'
                                onChange={this.handleChange}
                                fullWidth
                                margin="dense"
                                // variant='outlined'
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleTwoToneIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <TextField
                                label="Email"
                                style={{ margin: 8 }}
                                placeholder="xyz@example.com"
                                name='email'
                                onChange={this.handleChange}
                                fullWidth
                                margin="dense"
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailTwoToneIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <TextField
                                label="Password"
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

                            <TextField
                                label="Confirm Password"
                                style={{ margin: 8 }}
                                placeholder="Confirm Password"
                                name='confirmPassword'
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
                                color="primary"
                                onClick={() => this.handleSubmit({ email: this.state.email, password: this.state.password })}
                            >
                                Sign up
                            </Button> <br />

                            {this.state.error}

                        </Paper>

                    </Grid>

                    <Grid
                        item xs={3}
                    >
                    </Grid>

                </Grid>

            </div>
        )
    }
}

export default Signup;

//validation on 'Sign up' button
// creatimg userr with firebase api 