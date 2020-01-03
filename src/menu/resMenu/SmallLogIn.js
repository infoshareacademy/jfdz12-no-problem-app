import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppBar, MenuItem, Menu, IconButton, Typography, Toolbar } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import SwipeableTemporaryDrawer from '../SwipeableDrawer';
import Logo from '../../logo.png'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      maxWidth: '100px',
      paddingLeft: '45px',
     
    },
    
    customWidth: {
      minWidth: 75,
      minHeight: 75,
      marginRight:'-10px'
    },
    label: {
      fontSize: 15, 
    },
    navStyle: {
      top: 0,
      left: "auto",
      right: 0,
      position: "fixed",
      backgroundColor: "white",
      color: "#757575",
      zIndex: 100,
    },
    flex: {
      display: "flex",
      justifyContent: "space-between"
    }
  }));



export default function SmallLogIn(props) {
    const classes = useStyles();
  
  
    return (
       
        <div>
             <Toolbar className={classes.flex}>
            <SwipeableTemporaryDrawer auth={props.auth} log={props.log}/>
          <Link to='/'>
            <img src={Logo} className={classes.logo} />
          </Link>
         
          
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={props.handleMenu}
                color="inherit"
                className={classes.customWidth}
              >
                <AccountCircle />
              </IconButton>
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
                open={props.open}
                onClose={props.handleClose}
            >
                <MenuItem onClick={props.handleClose} component={Link} to='/userAccount'>Moje konto</MenuItem>
                <MenuItem onClick={props.handleClose} component={Link} to='/addCake'>Dodaj ciasto</MenuItem>
                <MenuItem onClick={props.handleChange} component={Link} to='/'>Wyloguj się</MenuItem>
              </Menu>
            </div>
            </Toolbar>
        </div>
    )
}
