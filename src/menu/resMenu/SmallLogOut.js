import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Toolbar } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import SwipeableTemporaryDrawer from '../SwipeableDrawer';
import Logo from '../../logo.png'

const useStyles = makeStyles(theme => ({
    logo: {
        maxWidth: '110px',
        paddingTop: '5px'
    },
    userAccount: {
        color: 'rgb(185, 19, 124)'
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
        color: 'rgb(185, 19, 124)'
    },
    label: {
        fontSize: '12px',
        fontWeight: 'bold',
        marginLeft: '-19px'
    }
  }));

export default function SmallLogOut(props) {
    const classes = useStyles();
    console.log(props.userType)
    return (
        <div>
             <Toolbar className={classes.flex}>

             <SwipeableTemporaryDrawer 
                auth={props.auth} 
                log={props.log}
                userType={props.userType}
            />

            <Link to='/'>
                <img src={Logo} className={classes.logo} alt='logo' />
            </Link>
            <div>
                <IconButton
                    aria-label="account of current user"
                    onClick={props.log}
                    color="inherit"
                    className={classes.label}
                    component={Link} to='/SignIn'
                > 
                    <div>
                        Zaloguj
                    </div>
                </IconButton>
            </div>
          </Toolbar>
        </div>
    )
}
