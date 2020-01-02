import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppBar, MenuItem, Menu, IconButton, Typography, Toolbar } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import SwipeableTemporaryDrawer from './SwipeableDrawer';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
  customWidth: {
    minWidth: 150
  },
  label: {
    fontSize: 15,
    paddingLeft: 2
  },
  navStyle: {
    top: 0,
    left: "auto",
    right: 0,
    position: "fixed",
    backgroundColor: "white",
    color: "#757575",
    zIndex: 100,
  }
}));



export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = () => {
    setAuth(false);
    setAnchorEl(null);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setAuth(false);
  }

  const logIn = () => {
    setAuth(true)
  }

  

  return (
    <div className={classes.root} position="static">
      
      <AppBar  className={classes.navStyle}>
        <Toolbar>
          <SwipeableTemporaryDrawer auth={auth} logOut={logOut} logIn={logIn}/>
          <Link to='/'>
            <Typography variant="h6" className={classes.title} >
              Ale Ciacha!
            </Typography>
          </Link>
          {auth ? (
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
                <Link to='/userAccount'><MenuItem onClick={handleClose}>Moje konto</MenuItem></Link>
                <Link to='/addCake'><MenuItem onClick={handleClose}>Dodaj ciasto</MenuItem></Link>
                <Link to='/'><MenuItem onClick={handleChange}>Wyloguj się</MenuItem></Link>
              </Menu>
            </div>
          ) : (
            <div>
            <IconButton
              aria-label="account of current user"
              onClick={logIn}
              color="inherit"
              className={classes.customWidth}      
              
            > 
             
              <div className={classes.label}>Zaloguj</div>
            </IconButton>
           
          </div>
          )}
        </Toolbar>
      </AppBar>
     
    </div>
  );
}
