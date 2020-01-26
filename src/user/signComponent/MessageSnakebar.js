import React from 'react';
import {Snackbar, IconButton, withStyles} from '@material-ui/core'; 
import CloseIcon from '@material-ui/icons/Close';

const styles = {
    col1:{
        '& .MuiSnackbarContent-root': {
            backgroundColor: '#0277bd',
        }
    }
}

function MessageSnakebar (props) {

    const {open, classes, message } = props;

    return (
        <Snackbar
            className={classes.col1}
            open={open}
            autoHideDuration={5000}
            onClose={props.onHandleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            message = {message}
            action={
                <>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={props.onHandleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </>
            }
        />
    )
}

export default withStyles(styles)(MessageSnakebar);