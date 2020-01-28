import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';
import { FIREBASE_API, getCookById, } from '../../api/Api2';
import { CircularProgress } from '@material-ui/core';

export function LikeCake (props) {
    const { likesUsersId } = props.cake;
    const userId = sessionStorage.getItem('userId');
    const checkUserLike = likesUsersId ? likesUsersId.includes(userId) : false; 

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect (() => {
       
        getCookById(userId)
            .then(user => setUser(user))
            .catch(error => console.log('error', error.toString()))
            .finally(() => setIsLoading(false));
        },[userId])

    const handleLikeClick = () => {
        const { likesUsersId, id} = props.cake;  
        setIsLoading(true);
       
        const newLikeCount = likesUsersId ? likesUsersId.length + 1 : 1;
        const likeIdUserTab = likesUsersId ? [...likesUsersId, userId] : [userId];
        const likeIdCakeTab = user ? [...user.likeCakesId, id] : [id];

        Promise.all([
            fetch(`${FIREBASE_API}/cakes/${id}.json`, {
                method: 'PATCH',
                body: JSON.stringify({likes: newLikeCount})
            }),
            fetch(`${FIREBASE_API}/cakes/${id}/.json`, {
                method: 'PATCH',
                body: JSON.stringify({likesUsersId: likeIdUserTab})
            }),
            fetch(`${FIREBASE_API}/users/${userId}/.json`, {
                method: 'PATCH',
                body: JSON.stringify({likeCakesId: likeIdCakeTab})
            }),
        ]) 
            .then ((res) => console.log('dodałem', res))
            .catch(error => console.log('error', error.message))
            .finally(() => {
                setIsLoading(false);
                props.onHandleOnLike();
                }
            )
    }

    const handleIsLoading = () => {
        return <CircularProgress size = '15px' color="secondary" />
    }

    return (<>
        <Button
            disabled = {checkUserLike}
            onClick = {handleLikeClick}
            variant="outlined"
            color="secondary"
            style = {{ margin: '20px 10px'}}
            startIcon={<FavoriteIcon />}
            endIcon= {isLoading && handleIsLoading()}
        > 
            Polub
        </Button>

    </>)


}