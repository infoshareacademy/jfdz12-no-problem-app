import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button, IconButton } from '@material-ui/core';
import { getCookById, updateLikeCounterInCake, addLikedCakeIdToUser, addUserLikeIdToCake } from '../../api/Api2';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { startSnack } from '../../state/snackbar'; 
import { Redirect } from 'react-router-dom';

function LikeCakeButton (props) {
    const { likesUsersId } = props.cake;
    const { lbutton, likeColor, } = props;
    const userId = props.userIdInStore; //sessionStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [redirect, setRedirect] = useState(false);

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
                lbutton === 'button' && props.onHandleOnLike();
                lbutton === 'iconButton' && setRedirect(true);
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

    console.log(userId)
    if(redirect){
        return <Redirect to={'/cakes'}/>
    }

    return (<>
        {lbutton === 'button' && <Button
            disabled = {checkLikeButton}
            onClick = {handleLikeClick}
            variant="outlined"
            color="secondary"
            style = {{ margin: '20px 10px'}}
            startIcon={<FavoriteIcon />}
            endIcon= {isLoading && handleIsLoading()}
        > 
            Polub
        </Button>}

        {lbutton === 'iconButton' 
                && <IconButton 
                        aria-label="add to favorites"
                        disabled = {checkLikeButton}
                        onClick = {handleLikeClick}
                    >
                        <FavoriteIcon style={{color: likeColor}}/>
                    </IconButton>}

    </>)
}

// const mapStateToProps = (state) => ({
//     userInStore: state.userReducer.user,
//     userIdInStore: state.userReducer.userId, 
//     userIsLoading: state.userReducer.isLoading,
// });

const mapDispatchToProps = {
	startSnack,
};

export default connect( null, mapDispatchToProps)(LikeCakeButton);