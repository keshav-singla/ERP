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

    componentWillReceiveProps(nextProps){
       this.setState({
           props: nextProps
       })
   }

    handleSignout = () => {
        fire.auth().signOut()
        // Response
            .then(res => {
                console.log('User Signed Out');
                // localStorage.removeItem("Refresh_Token")
                this.props.userSignOut(null)
            })
        //An error happened.
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
    return {
        token: state.user,
        isAuthenticated: state.user.isAuthenticated,
        isAuthenticating: state.user.isAuthenticating,
    }
}

export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(Dashboard));