import React from 'react';
import {Snackbar, IconButton, withStyles, } from '@material-ui/core'; 
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = {
    information:{
        '& .MuiSnackbarContent-root': {
            backgroundColor:'#bbdefb',
            color: '#0d47a1',
            //opacity: 0.99,
        },
        '& .MuiSnackbarContent-message':{
            fontSize:'14px'
        }
    },
    success:{
        '& .MuiSnackbarContent-root': {
            backgroundColor: '#c8e6c9',
            color:'#1b5e20',
            //opacity: 0.99,
        },
        '& .MuiSnackbarContent-message':{
            fontSize:'14px'
        }
    },
    warning:{
        '& .MuiSnackbarContent-root': {
            backgroundColor: '#ffcc80',
            color: '#e65100',
        },
        '& .MuiSnackbarContent-message':{
            fontSize:'14px'
        }
    },
    error:{
        '& .MuiSnackbarContent-root': {
            backgroundColor: '#ffcdd2',
            color: '#b71c1c',
        },
        '& .MuiSnackbarContent-message':{
            fontSize:'14px'
        }
    },
}

function Transition(props) {
    return <Slide {...props} direction="up" />;
  }

function MessageSnakebar (props) {
    
    const {open, classes, message, backColor } = props;
   
    return (
        <Snackbar
            className={classes[backColor]}
            open={open}
            autoHideDuration={4000}
            onClose={props.onHandleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            message = {message}
            TransitionComponent={Transition}
            action={
                <>
                    <IconButton 
                        size="small" 
                        aria-label="close" 
                        color="inherit" 
                        onClick={props.onHandleClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </>
            }
        >
            
        </Snackbar>

    )
}

export default withStyles(styles)(MessageSnakebar);