import React from 'react'

//Material Ui
import { Button } from '@material-ui/core'

//Firebase
import fire from '../config.js/fireBaseConfiguration'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleSigout = () => {
        fire.auth().signOut()
            .then(res => {
                // Sign-out successful.
                console.log('User Signed Out');                
            })
            
            .catch( (error) => {
                // An error happened.
            });

    }

    render() {
        return (
            <div>
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

export default Dashboard;