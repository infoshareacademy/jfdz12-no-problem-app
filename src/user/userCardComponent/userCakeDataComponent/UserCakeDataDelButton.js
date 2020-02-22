import React, { useState,} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Tooltip, CircularProgress, } from '@material-ui/core';
import { UserCakeDeleteModal } from './UserCakeDeleteModal';
import { addLikedCakeIdToUser, deleteCakeById } from '../../../api/Api2'
import { startSnack } from '../../../state/snackbar'; 
import { connect } from 'react-redux';

function UserCakeDataDelButton(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { cake, users } = props;
    
    const findDataById = (data, id) => data.find((data) => data.id === id) || {};

    const preparedDataToDelete = () =>{
        const { likesUsersId, id } = props.cake;
        const selectedUserLikeCakeDelete = likesUsersId 
                        ? cake.likesUsersId.map((el)=> findDataById(users, el) ) 
                        : [];
      
        if(selectedUserLikeCakeDelete.length>0){
            const preparedData = selectedUserLikeCakeDelete.map((user) =>{
                const likeIdCakeTab = user 
                    ?{
                        userId: user.id,
                        likeIdCakeTab: user.likeCakesId.filter((cakeId) => cakeId !== id)
                    }
                    : null;
                return likeIdCakeTab;
            })
            return preparedData;
        }else{
            return[];
        }
    }
    
    const handleCakeDelete = () => {
        setIsLoading(true);
        const dataToDelete = preparedDataToDelete();
      
        Promise.all([
            ...(dataToDelete.map(data =>{
                return addLikedCakeIdToUser(data.userId, data.likeIdCakeTab)
            })),
            deleteCakeById(cake.id)
        ])
            .then((res) => {
                console.log('dodałem', res);
                props.startSnack('ciasto zostało usunięte !', 'error');
            })
            .catch(error => console.log('error', error.message))
            .finally(() => {
                    setIsLoading(false);
                    setOpen(false);
                    props.handleOnDelete();
                }
            )        
    }

    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true)
    }

    if (isLoading) {
        return <div>
            <CircularProgress size='15px' color="secondary" />
        </div>
    }

    return <>
        <UserCakeDeleteModal 
            open={open}
            handleCakeDelete = {handleCakeDelete}
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

const mapDispatchToProps = {
	startSnack,
};

export default connect( null, mapDispatchToProps)(UserCakeDataDelButton);