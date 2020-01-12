import React from 'react';
import { Paper, Divider, MenuList, MenuItem, withStyles, } from '@material-ui/core';

const styles = {
    leftTextMenu :{
        //textAlign: 'center',
        padding: '10px 0px',
    },
    interText:{
        display: 'flex', 
        flexDirection:'column', 
        justifyContent:'center',
        fontSize: '16px',
        fontWeight: '500',
        
    }
}

function UserMenu(props){
    const {classes} = props;

    return (
        <Paper>
            <MenuList >
                <MenuItem className={classes.interText} onClick={() => props.onHandleClick('basic')} selected={props.selectedMenu.basic}>
                    <div className={classes.leftTextMenu}> Dane podstawowe</div>    
                </MenuItem>
                <Divider/>
                <MenuItem className={classes.interText} onClick={() => props.onHandleClick('like')} selected={props.selectedMenu.like}>
                    <div className={classes.leftTextMenu}> Twoje polubienia</div>
                </MenuItem>
            </MenuList>
        </Paper>
    )

}

export default withStyles(styles)(UserMenu);