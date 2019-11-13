import React from 'react';

// Material UI core
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Paper } from '@material-ui/core';

//Icons
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
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            error : ''
        }
    }

    formEmpty = (username, email, password, confirmPassword) => {
        return !username.length || !email.length || !password.length || !confirmPassword.length
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSbmit = ( userData ) => {
        console.log(userData);
        console.log(userData.email);
        console.log(userData.password);
    }

    validation = () => {
        if(this.formEmpty(this.state)){
            this.setState({
                error: 'Fill the feilds'
            })
        }
    }

    render() {
        // console.log(this.state.username);
        // console.log(this.state.email);
        // console.log(this.state.confirmPassword);

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
                        // style={{ margin: 20 }}
                    >
                        <Paper
                            style={{ padding: 20 }}
                        >
                            <TextField
                                id="input-with-icon-textfield"
                                label="Username"
                                style={{ margin: 8 }}
                                placeholder="username"
                                name='username'
                                onChange={this.handleChange}
                                // fullWidth
                                margin="dense"
                                variant='outlined'
                                autoComplete='off'
                                InputProps={{
                                    // shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleTwoToneIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <TextField
                                id="input-with-icon-textfield"
                                label="Email"
                                style={{ margin: 8 }}
                                placeholder="xyz@example.com"
                                name='email'
                                onChange={this.handleChange}
                                // fullWidth
                                margin="dense"
                                variant='outlined'
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailTwoToneIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /><br />

                            <TextField
                                id="input-with-icon-textfield"
                                label="Password"
                                style={{ margin: 8 }}
                                placeholder="password"
                                name='password'
                                type='password'
                                onChange={this.handleChange}
                                // fullWidth
                                margin="dense"
                                variant='outlined'
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpenTwoToneIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /><br />

                            <TextField
                                id="input-with-icon-textfield"
                                label="Confirm Password"
                                style={{ margin: 8 }}
                                placeholder="confirm password"
                                name='confirmPassword'
                                type='password'
                                onChange={this.handleChange}
                                // fullWidth
                                margin="dense"
                                variant='outlined'
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpenTwoToneIcon color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            /><br />

                            <Button
                                variant="contained"
                                color="primary"
                                onClick = { () => this.handleSbmit( {email: this.state.email , password: this.state.password} )}
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