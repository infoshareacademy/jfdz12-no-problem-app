import React from 'react';
import '../Cake.css';
import { IconButton, withStyles, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';

const styles = {
    root :{
        padding: 5,
        '&:hover': {
                backgroundColor: '#17a3b84d',  
            },
    },
    WrapIconButtonStyle:{
        position: 'fixed',
        top: '80vh',
        left: '90vw',
        backgroundColor: '#17a3b8',
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