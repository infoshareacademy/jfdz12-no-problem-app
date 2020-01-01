import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

 const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  let sideList;
  if (!props.auth) {
    sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      
      <List>
  
          <ListItem button key={"Lista ciast"}>
            <ListItemIcon> <Icon>cake</Icon></ListItemIcon>
            <ListItemText primary={'Lista ciast'} />
          </ListItem>
          <ListItem button key={"Lista cukierników"}>
            <ListItemIcon> <EmojiPeopleIcon /></ListItemIcon>
            <ListItemText primary={'Lista cukierników'} />
          </ListItem>
        
      </List>
      <Divider />
      <List>
       
          <ListItem button key={'Zaloguj'} onClick={props.logIn}>
            <ListItemIcon> <Icon>face</Icon> </ListItemIcon>
            <ListItemText primary={'Zaloguj'}  />
          </ListItem>
         
      
      </List>
    </div>
  )} else {
    sideList = (side) => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        
        <List>
    
            <ListItem button key={"Lista ciast"}>
              <ListItemIcon> <Icon>cake</Icon></ListItemIcon>
              <ListItemText primary={'Lista ciast'} />
            </ListItem>
            <ListItem button key={"Lista cukierników"}>
              <ListItemIcon> <EmojiPeopleIcon /></ListItemIcon>
              <ListItemText primary={'Lista cukierników'} />
            </ListItem>
          
        </List>
        <Divider />
        <List>
         
            <ListItem button key={'Moje konto'}>
              <ListItemIcon> <Icon>face</Icon> </ListItemIcon>
              <ListItemText primary={'Moje konto'} />
            </ListItem>
            <ListItem button key={'Dodaj ciasto'}>
              <ListItemIcon> <ControlPointIcon /> </ListItemIcon>
              <ListItemText primary={'Dodaj ciasto'} />
            </ListItem>
            <ListItem button key={'Wyloguj'} onClick={props.logOut}>
              <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
              <ListItemText primary={'Wyloguj'} />
            </ListItem>
        
        </List>
      </div>
    )
  };

  return (
    <div>
       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
      
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
      
    </div>
  );
}