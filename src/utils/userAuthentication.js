import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as auth from '../actions/userAction';
import { bindActionCreators } from 'redux';

export default function RequireAuthentication(Component) {
    class AuthenticatedComponent extends React.Component {
        constructor(){
            super();
            this.state = {

            }
        }

        componentWillMount() {
            this.checkAuth();
        }

        checkAuth () {
            if (!this.props.isAuthenticated || !this.props.token) {
                const redirectAfterLogin = this.props.location.pathname;
                this.props.dispatch(push(`${redirectAfterLogin}`));
            }
        }

        render() {
            console.log(this.props);
            return (
                <div className="ui custom_light_teal_bg">
                    {this.props.isAuthenticated
                        ? <Component {...this.props} />
                        : null
                }
                </div>
            );
        }
    }

    const mapStateToProps = (state) => {
        console.log(state);
        return {
           token: state.token,
           isAuthenticated: state.isAuthenticated,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            dispatch,
            authActions: bindActionCreators(auth, dispatch),
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}