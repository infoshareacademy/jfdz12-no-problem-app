import React from 'react';
import { IconButton, withStyles, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';

const styles = {
    root :{
        padding: 5,
        '&:hover': {
                backgroundColor: '#17a3b8f0',
                transform: 'scale(1.1)',  
            },
    },
    WrapIconButtonStyle:{
        position: 'fixed',
        right: '15px',
        bottom: '75px',
        backgroundColor: '#17a3b8a0',
        color: 'white',
    }, 
    IconButtonStyle:{
        fontSize: '2.5rem',
    }
}


function CakeAddButton(props){
    const {classes} = props;

    return(
        <Tooltip arrow title="Dodaj ciasto" placement="left">
            <IconButton
                onClick={props.onHandleCakeAddChange}
                className={clsx(classes.root, classes.WrapIconButtonStyle)}
            >
                <AddIcon className={classes.IconButtonStyle}/>
            </IconButton>
        </Tooltip>
    )
}

export default withStyles(styles)(CakeAddButton)