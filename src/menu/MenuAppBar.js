import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppBar, MenuItem, Menu, IconButton, Typography, Toolbar } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import SwipeableTemporaryDrawer from './SwipeableDrawer';
import Logo from '../logo.png'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    maxWidth: '170px',
    paddingLeft: '45px',
    color: "#95a0a3"
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



export default function MenuAppBar(props) {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = () => {
    props.setAuth();
    setAnchorEl(null);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    props.setAuth();
  }

  const logIn = () => {
    props.setAuth();
  }

  

  return (
    <div className={classes.root} position="static">
      <AppBar className={classes.navStyle}>
        <Toolbar className={classes.flex}>
          <SwipeableTemporaryDrawer auth={props.auth} logOut={logOut} logIn={logIn}/>
          <Link to='/'>
            <img src={Logo} className={classes.logo} />
          </Link>
         
          {props.auth ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.customWidth}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} component={Link} to='/userAccount'>Moje konto</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/addCake'>Dodaj ciasto</MenuItem>
                <MenuItem onClick={handleChange} component={Link} to='/'>Wyloguj się</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
            <IconButton
              aria-label="account of current user"
              onClick={props.setAuth}
              color="inherit"
              className={classes.customWidth}      
              
            > 
            <div className={classes.label}>
              Zaloguj
            </div>
            </IconButton>
           
          </div>
          )}
        </Toolbar>
      </AppBar>
     
    </div>
  );
}
