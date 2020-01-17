import React from 'react'
import Logo from '../../logo.png';
import { IconButton, Tooltip, Toolbar } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import CakeIcon from '@material-ui/icons/Cake';


const useStyles = makeStyles(theme => ({
    logo: {
      maxWidth: '110px',
      paddingTop: '5px',
      paddingLeft: '25px'
    },
    menuIcon: {
        color: "hotpink",
        marginRight: '15px'
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
                        <img src={Logo} className={classes.logo} alt='logo'/>
                    </Link>
                    </div>
                    <div>
                    <Tooltip title="Lista ciast">
                        <IconButton component={Link} to="/cakes" className={classes.menuIcon}>
                            <CakeIcon className={classes.menuIconInner}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Lista cukierników">
                        <IconButton component={Link} to="/cooks" className={classes.menuIcon}>
                            <EmojiPeopleIcon className={classes.menuIconInner}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Twoje konto">
                    <IconButton component={Link} to={`/userCard`} className={classes.menuIcon}>
                            <FaceIcon className={classes.menuIconInner}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Dodaj ciasto">
                        <IconButton component={Link} to="/cakeAdd/empty" className={classes.menuIcon}>
                            <ControlPointIcon className={classes.menuIconInner}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Wylogowanie">
                        <IconButton onClick={props.log} className={classes.menuIcon}>
                            <ExitToAppIcon className={classes.menuIconInner}/>
                        </IconButton>
                    </Tooltip>
                </div>
            </Toolbar>
        </div>
    )
}
