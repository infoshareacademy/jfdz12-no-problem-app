import React from 'react';
import { MenuItem, withStyles } from '@material-ui/core';

const styles = {
    leftTextMenu :{
        padding: '5px 0px',
    },
    interText:{
        display: 'flex', 
        flexDirection:'column', 
        justifyContent:'center',
        alignItems: 'flex-start',
        fontSize: '14px',
        fontWeight: '500',
    },
}

function UserMenuItem(props){
    const {classes} = props;

    const handleClick = () =>{
        props.onHandleClick(props.menu)
    }

    return (
            <MenuItem 
                className={classes.interText} 
                onClick={handleClick} 
                selected={props.selectedMenu}>
                <div className={classes.leftTextMenu}>
                    {props.text} 
                </div>    
            </MenuItem>
    )

}

export default withStyles(styles)(UserMenuItem);