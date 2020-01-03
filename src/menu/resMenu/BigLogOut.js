import React from 'react'
import Logo from '../../logo.png';
import { AppBar, MenuItem, Menu, IconButton, Typography, Toolbar } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import CakeIcon from '@material-ui/icons/Cake';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      maxWidth: '100px',
      
    
    },
    menuIcon: {
        color: "hotpink",
       
    },

    menuIconInner: {
        fontSize: '50px'
    },

    menuIconSpecial: {
        color: "hotpink",
        marginRight: '96px'
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

export default function BigLogIn(props) {
    const classes = useStyles();
    return (
        <div>
            <Toolbar className={classes.flex}>
                <div>
                <Link to='/'>
                    <img src={Logo} className={classes.logo} />
                </Link>
                </div>
                <div>
                <IconButton component={Link} to="/cakes" className={classes.menuIcon} >
                    <CakeIcon className={classes.menuIconInner}/><br />
                    
                </IconButton>
                <IconButton component={Link} to="/cooks" className={classes.menuIcon}>
                <EmojiPeopleIcon />
                </IconButton>
                <IconButton onClick={props.log} className={classes.menuIconSpecial}>
                <FaceIcon/>
                </IconButton>
                </div>
                {/* <IconButton component={Link} to="/addCake">
                <ControlPointIcon />
                </IconButton>
                <IconButton onClick={props.log}>
                <ExitToAppIcon />
                </IconButton> */}
            </Toolbar>
        </div>
    )
}