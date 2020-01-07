import React from 'react';
import { Tooltip, IconButton, withStyles } from '@material-ui/core';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import clsx from 'clsx';

const styles = {
    root :{
        padding: 5,
        '&:hover': {
            backgroundColor: '#564147',
            transform: 'scale(1.1)',  
        },
    },
    WrapIconButtonStyle:{
        position: 'fixed',
        top: '70vh',
        left: '90vw',
        backgroundColor: '#564147a0',
        color: 'white',
    }, 
    IconButtonStyle:{
        fontSize: '2.5rem',
    }
}

function ToogleView (props){

    const {classes, toogleView} = props;
    
    return <>
    
        <Tooltip arrow title="zmień widok" placement="left">
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