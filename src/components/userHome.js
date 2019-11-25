import React from 'react'

// Material Ui
import Button from '@material-ui/core/Button'

// Firebase
import fire from '../config.js/fireBaseConfiguration'

// Component
import Topbar from './bar'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleSigout = () => {
        fire.auth().signOut()
        .then(res => {
            console.log('User Signed Out');
            localStorage.removeItem("refreshToken")
        })
            
        .catch( (error) => {
            // An error happened.
        });
        this.props.history.push(`/`);
    }

    render() {
        return (
            <div>

                <Topbar/>

                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => this.handleSigout()}
                >
                    Sign out
                </Button>
            </div>
        )
    }
}

export default (Dashboard);