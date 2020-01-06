import React from 'react'
import Logo from '../../logo.png';
import { IconButton, Tooltip, Toolbar } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CakeIcon from '@material-ui/icons/Cake';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles(theme => ({
    logo: {
      maxWidth: '110px',
      paddingTop: '5px',
      paddingLeft: '25px'
    },
    menuIcon: {
        color: "hotpink",
        marginRight: '30px'
    },
    menuIconInner: {
        fontSize: '40px'
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
                        <img src={Logo} className={classes.logo} alt="logo"/>
                    </Link>
                    </div>
                    <div>
                    <Tooltip title="Lista ciast">
                        <IconButton component={Link} to="/cakes" className={classes.menuIcon} >
                            <CakeIcon className={classes.menuIconInner}/><br />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Lista cukierników">
                        <IconButton component={Link} to="/cooks" className={classes.menuIcon}>
                            <EmojiPeopleIcon className={classes.menuIconInner}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Logowanie">
                        <IconButton component={Link} to="/SignIn" onClick={props.log} className={classes.menuIcon}>
                            <LockOpenIcon className={classes.menuIconInner}/>
                        </IconButton>
                    </Tooltip>
                </div>
            </Toolbar>
        </div>
    )
}