import React from 'react'

// Redux
import {withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userSignOut } from '../actions/userAction';

// Material Ui
import Button from '@material-ui/core/Button'

// Firebase
import fire from '../config.js/fireBaseConfiguration'

// Component
import Topbar from './bar'
import Grid from '@material-ui/core/Grid'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    componentWillMount() {
        console.log('Testing')
    }

    handleSignout = () => {
        fire.auth().signOut()
        // Response
            .then(res => {
                console.log('User Signed Out');
                this.props.userSignOut(this.props.history)
            })
        // Error
            .catch((error) => {
            });
    }

    render() {
        return (
            <div>
                <Grid container >
                    <Grid
                        item xs={12}
                    >
                        <Topbar />
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => this.handleSignout()}
                        >
                            Sign out
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      userSignOut: bindActionCreators(userSignOut, dispatch)
    };
  };

// Accesing the Redux Store
function mapStateToProps(state) {
    console.log(state);
    return {
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isAuthenticating: state.isAuthenticating,
    }
}

export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(Dashboard));