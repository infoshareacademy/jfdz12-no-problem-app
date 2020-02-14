import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';
import { getCookById, updateLikeCounterInCake, addLikedCakeIdToUser, addUserLikeIdToCake } from '../../api/Api2';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { startSnack } from '../../state/snackbar'; 

function LikeCakeButton (props) {
    const { likesUsersId } = props.cake;
    const userId = props.userIdInStore; //sessionStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect (() => {
        getCookById(userId)
            .then(user => setUser(user))
            .catch(error => console.log('error', error.toString()))
            .finally(() => setIsLoading(false));
        },[userId])

    const handleLikeClick = () => {
        const { likesUsersId, id, name} = props.cake;  
        setIsLoading(true);
       
        const newLikeCount = likesUsersId ? likesUsersId.length + 1 : 1;
        const likeIdUserTab = likesUsersId ? [...likesUsersId, userId] : [userId];
        const likeIdCakeTab = user ? [...user.likeCakesId, id] : [id];
       
        Promise.all([
            updateLikeCounterInCake(id,newLikeCount),
            addLikedCakeIdToUser(userId, likeIdCakeTab),
            addUserLikeIdToCake(id,likeIdUserTab)
        ]) 
            .then ((res) => {
                console.log('dodałem', res)
                props.startSnack(`właśnie polubiłeś ciasto: ${name} `, 'information');
            })
            .catch(error => console.log('error', error.message))
            .finally(() => {
                setIsLoading(false);
                props.onHandleOnLike();
                }
            )
    }

    const checkLikeButtonDisble = () => {
        const checkUser = (userId === 'null' || userId === null) ? true : false;
        const checkUserLike = likesUsersId ? likesUsersId.includes(userId) : false; 

        return checkUser ? true : checkUserLike;
    }

    const checkLikeButton = checkLikeButtonDisble();

    const handleIsLoading = () => {
        return <CircularProgress size = '15px' color="secondary" />
    }

    return (<>
        <Button
            disabled = {checkLikeButton}
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

const mapStateToProps = (state) => ({
    userInStore: state.userReducer.user,
    userIdInStore: state.userReducer.userId, 
});

const mapDispatchToProps = {
	startSnack,
};

export default connect( mapStateToProps, mapDispatchToProps)(LikeCakeButton);