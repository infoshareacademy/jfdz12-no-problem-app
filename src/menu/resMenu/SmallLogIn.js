import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import { MenuItem, Menu, IconButton, Toolbar, Tooltip } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import SwipeableTemporaryDrawer from '../SwipeableDrawer';
import Logo from '../../logo.png'

const useStyles = makeStyles(theme => ({
    logo: {
      maxWidth: '110px',
      paddingTop: '5px'
    },
    userAccount: {
     color: 'hotpink'
    },
    flex: {
      display: "flex",
      justifyContent: "space-between",
      color: 'hotpink'
    }
  }));

export default function SmallLogIn(props) {
    const classes = useStyles();
   
    return (
        <div>
            <Toolbar className={classes.flex}>

                <SwipeableTemporaryDrawer auth={props.auth} log={props.log}/>

                <Link to='/'>
                    <img src={Logo} className={classes.logo} alt='logo'/>
                </Link>
                   
                <div>
                    <Tooltip title='Menu konta'>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={props.handleMenu}
                        >
                            <FaceIcon className={classes.userAccount}/>
                        </IconButton>
                    </Tooltip>

                    <Menu
                        id="menu-appbar"
                        anchorEl={props.anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        className={classes.userAccount}
                        open={props.open}
                        onClose={props.handleClose}
                    >
                        <MenuItem onClick={props.handleClose} component={Link} to='/oneuser'>Moje konto</MenuItem>
                        <MenuItem onClick={props.handleClose} component={Link} to='/addCake'>Dodaj ciasto</MenuItem>
                        <MenuItem onClick={props.handleChange} component={Link} to='/'>Wyloguj się</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </div>
    )
}
