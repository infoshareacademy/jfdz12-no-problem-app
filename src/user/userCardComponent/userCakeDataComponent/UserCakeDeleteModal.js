import React from 'react';
import { Slide, Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    dialogRoot: {
        '& .MuiDialog-paper': {
            border: '3px solid #47817E',
            borderRadius: '10px',
            padding: '10px',
            maxWidth: '400px',
            backgroundColor: '#fce4ec',
        }
    },
    dialogContentText: {
        fontSize: '18px',
        textAlign: 'center',
        marginBottom: 0,
        color: '#47817E',
    },
    dialogActions: {
        padding: '10px',
        justifyContent: 'center',
    },
    dialogButton: {
        width: '100px',
        margin: '10px'
    }
});

const TransitionUp = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function UserCakeDeleteModal(props) {
    const classes = useStyles();

    return (<>
        <Dialog
            className={classes.dialogRoot}
            open={props.open}
            TransitionComponent={TransitionUp}
            keepMounted
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            fullWidth
            //classes = {{paper: modalProps[idxModal].backColor}}
        >
            <DialogContent className={classes.dialogContent}>
                <DialogContentText className={classes.dialogContentText} id="alert-dialog-slide-description">
                    Czy na pewno chcesz usunąć ciasto? 
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button onClick={props.handleClose} variant='outlined' color="primary" className={classes.dialogButton}>
                    Nie
                </Button>
                <Button onClick={props.handleCakeDelete} variant='outlined' color="secondary" className={classes.dialogButton}>
                    Tak
                </Button>
            </DialogActions>
        </Dialog>

    </>)


}