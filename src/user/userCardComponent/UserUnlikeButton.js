import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getCookById, updateLikeCounterInCake, addLikedCakeIdToUser, addUserLikeIdToCake } from '../../api/Api2';
import { CircularProgress, IconButton, } from '@material-ui/core';
import { Slide, Dialog, DialogActions, DialogContent, DialogContentText, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    dialogRoot: {
        '& .MuiDialog-paper' :{
            border: '3px solid #DF9A63',
            borderRadius: '10px',
            padding: '10px',
            maxWidth: '400px',
        }
    },
    dialogContentText: {
        fontSize:'18px',    
        textAlign: 'center',
        marginBottom: 0,
    },
    dialogActions: {
        padding: '10px',
        justifyContent: 'center',      
    },
    dialogButton: {
        width: '100px',
        margin: '10px'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export function UserUnlikeButton(props) {
    const userId = sessionStorage.getItem('userId');
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {

        getCookById(userId)
            .then(user => setUser(user))
            .catch(error => console.log('error', error.toString()))
            .finally(() => setIsLoading(false));
    }, [userId])

    const handleUnLikeClick = () => {
        const { likesUsersId, id } = props.cake;
        setIsLoading(true);

        const newLikeCount = likesUsersId ? likesUsersId.length - 1 : 0;
        const likeIdUserTab = likesUsersId ? likesUsersId.filter((userLikeId) => userLikeId !== userId) : null;
        const likeIdCakeTab = user ? user.likeCakesId.filter((cakeId) => cakeId !== id) : null;

        Promise.all([
            updateLikeCounterInCake(id, newLikeCount),
            addLikedCakeIdToUser(userId, likeIdCakeTab),
            addUserLikeIdToCake(id, likeIdUserTab)
        ])
            .then((res) => console.log('dodałem', res))
            .catch(error => console.log('error', error.message))
            .finally(() => {
                setIsLoading(false);
                setOpen(false);
                props.onHandleOnUnLike();
            }
            )
    }

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }

    if (isLoading) {
        return <CircularProgress size='15px' color="secondary" />
    }



    return (<>
         <Dialog
            className = {classes.dialogRoot}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            fullWidth
        >
            <DialogContent className = {classes.dialogContent}>
                <DialogContentText className = {classes.dialogContentText} id="alert-dialog-slide-description">
                    Czy na pewno już nie lubisz tego ciasta !!!.
                </DialogContentText>
            </DialogContent>
            <DialogActions className = {classes.dialogActions}>
                <Button onClick={handleClose} variant='outlined' color="primary" className={classes.dialogButton}>
                    Lubię !!! 
                </Button>
                <Button onClick={handleUnLikeClick} variant='outlined' color="secondary" className={classes.dialogButton}>
                    Tak
                </Button>
            </DialogActions>
        </Dialog>

        <IconButton
            aria-label="remove from favorites"
            //onClick={handleUnLikeClick}
            onClick={handleOpen}
        >
            <FavoriteIcon style={{ color: 'red' }} />
        </IconButton>

    </>)


}