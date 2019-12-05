// import React from 'react';
// import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
// import authLoginUserReq from '../actions/userAction'
// import { bindActionCreators } from 'redux';

// export default function requireAuthentication(Component) {
//     class AuthenticatedComponent extends React.Component {
//         constructor(){
//             super();
//             this.state = {
//             }
//         }

//         componentWillMount() {
//             this.checkAuth();
//         }

//         checkAuth() {
//             if (!this.props.authLoginUserReq || !this.props.token) {
//                 const redirectAfterLogin = this.props.location.pathname;
//                 this.props.dispatch(push(`/?next=${redirectAfterLogin}`));
//             }
//         }

//         render() {
//             console.log(this.props.token);
//             return (
//                 <div className="ui custom_light_teal_bg ">
//                     {this.props.isAuthenticated
//                         ? <Component {...this.props} />
//                         : null
//                 }
//                 </div>
//             );
//         }
//     }

    

//     const mapStateToProps = (state) => {
//         return {
//             isAuthenticated: state.auth.isAuthenticated,
//             token: state.user
//         };
//     };

//     const mapDispatchToProps = (dispatch) => {
//         return {
//             dispatch,
//             actions: bindActionCreators(authLoginUserReq, dispatch),
//         };
//     };

//     return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
// }