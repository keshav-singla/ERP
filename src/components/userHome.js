import React from 'react'

// Material Ui
import Button from '@material-ui/core/Button'

// Firebase
import fire from '../config.js/fireBaseConfiguration'

// Component
import Topbar from './bar'
import Grid from '@material-ui/core/Grid'

//Redux
import { userSignOut } from '../actions/userAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    handleSignout = () => {
        fire.auth().signOut()
        // Response
            .then(res => {
                console.log('User Signed Out');
                // localStorage.removeItem("Refresh_Token")
                this.props.history.push(`/`);
                this.props.userSignOut()
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

// Dispatching the data into Reducer
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userSignOut }, dispatch)
}

export default connect ( ()=> {}, mapDispatchToProps) (Dashboard);