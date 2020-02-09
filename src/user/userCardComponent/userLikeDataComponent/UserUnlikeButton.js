import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getCookById, updateLikeCounterInCake, addLikedCakeIdToUser, addUserLikeIdToCake } from '../../../api/Api2';
import { CircularProgress, IconButton, Tooltip } from '@material-ui/core';
import { UserUnLikeModal } from './UserUnLikeModal';

export function UserUnlikeButton(props) {
    const userId = sessionStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [counter, setCounter] = useState(0);

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
                setCounter(0);
                props.onHandleOnUnLike();
                }
            )
    }

    const handleClose = () => {
        setOpen(false);
        setCounter(0);
        // props.onHandleOnUnLike();
    }

    const handleOpen = () => {
        setOpen(false);
        setTimeout(()=> setOpen(true),500) ;
        setCounter(counter + 1 );
    }

    if (isLoading) {
        return <div>
                <CircularProgress size='15px' color="secondary" />
            </div>
    }

    return (<>
        <UserUnLikeModal 
            open={open}
            handleUnLikeClick={counter < 5 ? handleOpen : handleUnLikeClick}
            handleClose={handleClose}
            counter={counter}
        />
        <Tooltip title="usuń plubienie" placement="left">
            <IconButton
                aria-label="remove from favorites"
                onClick={handleOpen}
            >
                <FavoriteBorderIcon style={{ color: 'red' }} />
            </IconButton>
        </Tooltip>

    </>)


}