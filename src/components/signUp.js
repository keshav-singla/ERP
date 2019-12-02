import React from 'react';

// Material-UI core
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';

//Icons
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';

//Firebase
import fire from '../config.js/fireBaseConfiguration'

//Redux
import { createdUser } from '../actions/userAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

//React components
import Topbar from './bar';

//React-Router
import {Link} from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: '',
        }
    }

    formEmpty = ({ username, email, password, confirmPassword }) => {
        return !username.length || !email.length || !password || !confirmPassword
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = (userData) => {
        console.log(userData);
        if (this.validation()) {
            this.props.createdUser(userData)
            fire.auth().createUserWithEmailAndPassword(userData.email, userData.password)

            // Response of API
            .then(response => {
                console.log(response);
                console.log(response.user);
                this.setState = ({
                    error: ''
                })
                this.props.history.push(`/`);
            })

            // Handle Errors here.
            .catch((error) => {
                var errorMessage = error.message;
                this.setState = ({
                    error: errorMessage,
                })
            });
        }
    }

    passwordValidation = ({ password, confirmPassword }) => {
        if (password.length <= 6 || password !== confirmPassword) {
            console.log('password invalid');
            return true;
        }

        else {
            return false;
        }
    }

    validation = () => {
        if (this.formEmpty(this.state)){
            this.setState({
                error: 'All feilds are mandatory to be filled'
            })
        }

        else if (this.passwordValidation(this.state)) {
            this.setState({
                error: "Password must be same and longer than 6 digits"
            })
        }

        else {
            return true;
        }
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
                        <Paper style={{padding: 20}} >
                            
                            <TextField
                                label='First Name'
                                style={{ margin: 8 }}
                                placeholder='First Name'
                                name='firstName'
                                onChange={this.handleChange}
                                fullWidth
                                margin="dense"
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonPinTwoToneIcon color='primary'/>
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <TextField
                                label='Last Name'
                                style={{ margin: 8 }}
                                placeholder='Last Name'
                                name='lastName'
                                onChange={this.handleChange}
                                fullWidth
                                margin='dense'
                                autoComplete='off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonPinTwoToneIcon color='primary'/>
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <TextField
                                label="Username"
                                style={{ margin: 8 }}
                                placeholder="Username"
                                name='username'
                                type ='text'
                                onChange={this.handleChange}
                                fullWidth
                                margin="dense"
                                autoComplete = 'off'
                                InputProps={{
                                    shrink: true,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleTwoToneIcon color= 'primary' />
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
                                        <InputAdornment position= 'start'>
                                            <EmailTwoToneIcon color= 'primary'/>
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
                                            <LockOpenTwoToneIcon color='primary'/>
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <TextField
                                label="Confirm Password"
                                style={{ margin: 8 }}
                                placeholder = 'Confirm Password'
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
                                            <LockOpenTwoToneIcon color='primary'/>
                                        </InputAdornment>
                                    )
                                }}
                            /> <br />

                            <Button
                                color="primary"
                                onClick={() => this.handleSubmit( {name:`${this.state.firstName}${this.state.lastName}`, email: this.state.email, password: this.state.password} ) }
                            >
                                Sign up
                            </Button>

                            <br />
                            
                            <Link to="/"> Already have an Account? Login </Link>

                            <br />

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

// Disptaching the data into Reducer
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createdUser }, dispatch)
}

// Accesing the Redux Store
// function mapStateToProps(state) {
//     return {
//         task: state.user
//     }
// }

export default connect( () => {} , mapDispatchToProps) (Signup);



// import { push } from 'react-router-redux';
// import { checkHttpStatus, parseJSON } from '../utils';
// import api from '../utils/api';
// import {
//     AUTH_LOGIN_USER_REQUEST,
//     AUTH_LOGIN_USER_FAILURE,
//     AUTH_LOGIN_USER_SUCCESS,
//     AUTH_LOGOUT_USER,
//     FORGOT_PASSWORD_REQUEST,
//     FORGOT_PASSWORD_SUCCESS,
//     SET_PASSWORD_REQUEST,
//     SET_PASSWORD_SUCCESS,
//     RESET_PASSWORD_REQUEST,
//     GET_ERRORS,
//     USER_LOGGED,
// } from '../constants';


// export function authLoginUserSuccess(token) {
//     localStorage.setItem('token', token);
//     return {
//         type: AUTH_LOGIN_USER_SUCCESS,
//         payload: {
//             token,
//         }
//     };
// }

// export function authLoginUserFailure(error, message) {
//     localStorage.removeItem('token');
//     return {
//         type: AUTH_LOGIN_USER_FAILURE,
//         payload: {
//             status: error,
//             statusText: message
//         }
//     };
// }

// export function authLoginUserRequest() {
//     return {
//         type: AUTH_LOGIN_USER_REQUEST
//     };
// }

// export function authLogout() {
//     localStorage.removeItem('token');
//     return {
//         type: AUTH_LOGOUT_USER
//     };
// }

// export function forgotPasswordRequest() {
//     return {
//         type: FORGOT_PASSWORD_REQUEST
//     };
// }

// export function forgotPasswordSuccess(code) {
//     return {
//         type: FORGOT_PASSWORD_SUCCESS,
//         payload: {
//             code,
//         }
//     };
// }

// export function setPasswordRequest() {
//     return {
//         type: SET_PASSWORD_REQUEST
//     };
// }

// export function resetPasswordRequest() {
//     return {
//         type: RESET_PASSWORD_REQUEST
//     };
// }

// export function setPasswordSuccess(data) {
//     return {
//         type: SET_PASSWORD_SUCCESS,
//         payload: {
//             data,
//         }
//     };
// }

// export function authLogoutAndRedirect(redirect = '/') {
//         return (dispatch, state) => {
//             dispatch(authLogout());
//             dispatch(push(redirect));
//         return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
//     };
// }


// export function authLogintAndRedirect(token) {
//         return (dispatch, state) => {
//             dispatch(authLoginUserSuccess(token));
//             dispatch(LoggedUser(true))
//             dispatch(push('/onboarding'));
//         return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
//     };
// }

// export function authLoginUser(username, password) {
//     return async (dispatch) => {
//         dispatch(authLoginUserRequest());

//         let data
//         try {
//             data = await api.apiFetch('POST', `/auth/log-in/`, null, {username,password})
//             dispatch(authLoginUserSuccess(data.token));
//             dispatch(LoggedUser(true))
//         } catch (e) {
//             if (e.code === 400 || e.code === 401) {
//                 dispatch(authLoginUserFailure());
//             }
//         }
//     };
// }

// export function forgotPassword(email) {
//     return async (dispatch) => {
//         dispatch(forgotPasswordRequest());
//          let data
//         try {
//             data = await api.apiFetch('POST', `/auth/recover/`, null, {email})
//             dispatch(forgotPasswordSuccess(data.code));
//         } catch (e) {
//             // console.log(e)
//             if (e.code === 400 || e.code === 401) {
//                 console.log("#ee")
//                 console.log(e)
//                 console.log("#ee")
//             }
//         }
//     };
// }

// export function setPassword(code, password, confirm_password){
//      return async (dispatch) => {
//         dispatch(setPasswordRequest());
//          let data
//         try {
//             if(code === "" || password === "" || confirm_password === ""){
//                 dispatch(getError(
//                     {
//                     error : {
//                         code : "This field may not be blank.",
//                         password : "This field may not be blank.",
//                         confirm_password : "This field may not be blank."
//                             }
//                     } 
//                     ))
//             }
//             else {
//                 data = await api.apiFetch('POST', '/auth/set-password/', null, {code, password, confirm_password})
//                 dispatch(authLogintAndRedirect(data.token));
//                 }
//         }
//         catch(e){
//             console.log(e)
//         }
//     }
// }



// export function resetPassword(code, password, confirm_password){
//      return async (dispatch) => {
//         dispatch(resetPasswordRequest());

//          let data
//         try {
//             if(code === "" || password === "" || confirm_password === ""){
//                 dispatch(getError(
//                     {
//                     error : {
//                         code : "This field may not be blank.",
//                         password : "This field may not be blank.",
//                         confirm_password : "This field may not be blank."
//                             }
//                     } 
//                     ))
//             }
//             data = await api.apiFetch('POST', `/auth/reset/`, null, {code, password, confirm_password})
//             dispatch(authLogoutAndRedirect());
//             return data;
//         } catch (e) {
//             console.log(e) 
//         }
//     }
// }


// export const getError = (error) => {
//   return {
//     type: GET_ERRORS,
//     payload: error,
//   };
// };

// export function LoggedUser(status){
//     return {
//         type : USER_LOGGED,
//         payload : status,
//         }
//     };