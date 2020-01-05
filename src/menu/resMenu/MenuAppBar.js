import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core/';
import BigLogOut from './BigLogOut';
import BigLogIn from './BigLogIn';
import SmallLogIn from './SmallLogIn';
import SmallLogOut from'./SmallLogOut';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: '170px',
    paddingLeft: '45px',
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
    minWidth: '300px'
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = () => {
    props.setAuth();
    setAnchorEl(null)
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const log = () => {
    props.setAuth()
  }
  
  let content;
  
      if (props.auth&&matches) {
          content = <SmallLogIn 
                      auth={props.auth} 
                      log={log} 
                      handleChange={handleChange} 
                      handleClose={handleClose} 
                      handleMenu={handleMenu} 
                      open={open} 
                      anchorEl={anchorEl}
                    />;
      };
      if (!props.auth&&matches) {
          content = <SmallLogOut 
                      auth={props.auth} 
                      log={log} 
                      handleChange={handleChange} 
                      handleClose={handleClose} 
                      handleMenu={handleMenu}
                    />
      };
      if (props.auth&&!matches) {
          content = <BigLogIn log={log}/>
      };
      if (!props.auth&&!matches) {
          content = <BigLogOut log={log}/>
         
      }
      

  return (
    
    <div className={classes.root} position="static">
      
      <AppBar className={classes.navStyle}>
       
           {content}
      
      </AppBar>
     
    </div>
  );
}
