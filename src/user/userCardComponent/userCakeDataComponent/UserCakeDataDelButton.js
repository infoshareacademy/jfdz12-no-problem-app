import React, { useState, useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Tooltip, CircularProgress, } from '@material-ui/core';
import { UserCakeDeleteModal } from './UserCakeDeleteModal';
import { getCookById } from '../../../api/Api2'

export function UserCakeDataDelButton(props) {

    const userId = sessionStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
 
    useEffect(() => {
        getCookById(userId)
            .then(user => setUser(user))
            .catch(error => console.log('error', error.toString()))
            .finally(() => setIsLoading(false));
    }, [userId])

    const handleCakeDelete = () => {
        console.log('handleCakeDelete !!!')
        // const { likesUsersId, id } = props.cake;
        // setIsLoading(true);

        // const newLikeCount = likesUsersId ? likesUsersId.length - 1 : 0;
        // const likeIdUserTab = likesUsersId ? likesUsersId.filter((userLikeId) => userLikeId !== userId) : null;
        // const likeIdCakeTab = user ? user.likeCakesId.filter((cakeId) => cakeId !== id) : null;

        // Promise.all([
        //     updateLikeCounterInCake(id, newLikeCount),
        //     addLikedCakeIdToUser(userId, likeIdCakeTab),
        //     addUserLikeIdToCake(id, likeIdUserTab)
        // ])
        //     .then((res) => console.log('dodałem', res))
        //     .catch(error => console.log('error', error.message))
        //     .finally(() => {
        //         setIsLoading(false);
        //         setOpen(false);
        //         props.onHandleOnUnLike();
        //         }
        //     )
                setIsLoading(false);
                setOpen(false);
                props.handleOnDelete();
    }

    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true)
    }

    if (isLoading) {
        return <CircularProgress size='15px' color="secondary" />
    }

    return <>
        <UserCakeDeleteModal 
            open={open}
            handleCakeDelete = {handleCakeDelete}
            //handleUnLikeClick={counter < 5 ? handleOpen : handleUnLikeClick}
            handleClose={handleClose}
        />
        <Tooltip title="usuwanie ciasta" placement="left">
            <IconButton
                aria-label="delete"
                onClick = {handleOpen}
            >
                <DeleteIcon />
            </IconButton>
        </Tooltip>

    </>
}