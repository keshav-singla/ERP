import React from 'react'

//Material Ui
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

//Icons
import MenuIcon from '@material-ui/icons/Menu';

class Topbar extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            edge= 'start'
                            color='inherit'
                            aria-label= 'open-drawer'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" noWrap>
                            ERP System
                        </Typography>
                    </Toolbar>

                </AppBar>
            </div>
        )
    }
}

export default Topbar