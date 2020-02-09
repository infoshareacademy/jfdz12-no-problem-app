import React from 'react';
import { Slide, Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles'

const useStyles = makeStyles({
    dialogRoot: {
        '& .MuiDialog-paper': {
            border: '3px solid #47817E',
            borderRadius: '10px',
            padding: '10px',
            maxWidth: '400px',
        }
    },
    dialogColor1: { backgroundColor: '#fce4ec' },
    dialogColor2: { backgroundColor: '#E1E2E1', left: '100px', top: '-100px' },
    dialogColor3: { backgroundColor: '#e8eaf6' },
    dialogColor4: { backgroundColor: '#e0f7fa', left: '-150px', top: '120px' },
    dialogColor5: { backgroundColor: '#ffebee' },

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

const TransitionDown = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export function UserUnLikeModal(props) {
    const classes = useStyles();
    const idxModal = props.counter;

    const modalProps = [
        {
            labelText: "Czy na pewno już nie lubisz tego ciasta !!!",
            backColor: classes.dialogColor1,
        }, {
            labelText: "Czy na pewno już nie lubisz tego ciasta !!!",
            backColor: classes.dialogColor1,
        }, {
            labelText: "Ej, no weź nie rób tego !!! Robisz ?",
            backColor: classes.dialogColor2,
        }, {
            labelText: "A jednak dalej zdecyowany ?",
            backColor: classes.dialogColor3,
        }, {
            labelText: "Czynisz złooooo - nie rób tego. Robisz ?",
            backColor: classes.dialogColor4,
        }, {
            labelText: "No dobra poddaje się giń. Na pewno?",
            backColor: classes.dialogColor5, 
        },
    ];

    return (<>
        <Dialog
            className={classes.dialogRoot}
            open={props.open}
            TransitionComponent={TransitionDown}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            fullWidth
            classes = {{paper: modalProps[idxModal].backColor}}
        >
            <DialogContent className={classes.dialogContent}>
                <DialogContentText className={classes.dialogContentText} id="alert-dialog-slide-description">
                    {modalProps[idxModal].labelText} 
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogActions}>
                <Button onClick={props.handleClose} variant='outlined' color="primary" className={classes.dialogButton}>
                    Lubię !!!
                </Button>
                <Button onClick={props.handleUnLikeClick} variant='outlined' color="secondary" className={classes.dialogButton}>
                    Tak
                </Button>
            </DialogActions>
        </Dialog>

    </>)


}