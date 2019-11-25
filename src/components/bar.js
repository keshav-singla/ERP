import React from 'react'

//Material Ui
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

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