import React from 'react';
import { Tooltip, IconButton, withStyles } from '@material-ui/core';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import clsx from 'clsx';

const styles = {
    root :{
        padding: 5,
        '&:hover': {
            transform: 'scale(1.2)',  
        },
    },
    WrapIconButtonStyle:{
        color: '#564147a0',
    }, 
    IconButtonStyle:{
        fontSize: '2rem',
    }
}

function ToogleView (props){

    const {classes, toogleView} = props;
    
    return <>
    
        <Tooltip arrow title="zmień widok" placement="right">
            <IconButton
                onClick={props.onHandleToogleView}
                className={clsx(classes.root, classes.WrapIconButtonStyle)}
            >
                { toogleView 
                    ? <ToggleOnIcon className={classes.IconButtonStyle}/>
                    : <ToggleOffIcon className={classes.IconButtonStyle}/>
                }
            </IconButton>
        </Tooltip>
    
    </>
}

export default withStyles(styles)(ToogleView);