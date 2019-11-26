import React from 'react'

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

    handleSignout = () => {
        localStorage.removeItem("Refresh_Token")
        fire.auth().signOut()
            .then(res => {
                console.log('User Signed Out');
            })

            .catch((error) => {
                // An error happened.
            });
        this.props.history.push(`/`);
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

export default (Dashboard);