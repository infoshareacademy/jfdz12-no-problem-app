import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Divider, CircularProgress, withStyles } from '@material-ui/core';
//import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import { UserUnlikeButton } from './UserUnlikeButton';
import { getLikesWithData } from '../../api/Api2'; 

const styles = {
    img : {
        width:'100%', 
        height:'100px',
    },
    grid:{
        padding: '5px',
    },
    text:{
        paddingLeft:'10px',
    },
    wrapper:{
        width:'100%',
    }
    
}

function UserLikeData(props){

    const userId = sessionStorage.getItem('userId');
    const [likes, setLikes] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect (() => {
        getLikesWithData(userId)
            .then(likes => setLikes(likes))
            .catch(error => console.log('error', error.toString()))
            .finally(() => {
                setIsLoading(false);
                setIsUpdate(false);
            })            
        },[isUpdate, userId])
    
    const handleOnUnLike = () =>{
        setIsUpdate(true);
        
        console.log('handleUlike')
    }

    const { classes } = props;

    const likesToRender = () => {
        if(likes.length>0){
            return likes.map ((like,idx) => {
                const backColor = idx % 2 === 0 ? '#fce4ec50' : '';
                return (<div key={like.cake.id} className={classes.wrapper}>
                    <Grid item xs={12}>
                       <Divider/>
                    </Grid>
                    
                    <Grid xs container item 
                        className={classes.grid} 
                        style ={{backgroundColor: backColor}}
                    >
                        
                        <Grid item sm={3} md={2} >
                            <Link to ={`/cake/${like.cake.id}`}>
                                <img src = {like.cake.imgURL} 
                                    alt="cake foto" 
                                    className={classes.img}>    
                                </img>
                            </Link>
                           
                        </Grid>
                            
                        <Grid item xs
                            container 
                            direction='column' 
                            alignItems='flex-start'
                            wrap='wrap'
                        > 
                            
                            <Grid item 
                                container 
                                justify='space-between' 
                                alignContent='flex-start'
                                direction='column'
                            >
                                <Grid item container alignItems='flex-start' direction='column'>
                                    <div className={classes.text}>
                                        ciasto: 
                                        <Typography className={classes.text} component='span' variant='h6'> 
                                            {like.cake.name}
                                        </Typography>
                                    </div>
                                    <div className={classes.text}>
                                        cukiernik: <Typography className={classes.text} component='span' variant='h6'> {like.cake.cookName}</Typography>
                                    </div>
                                    <div className={classes.text}>
                                        polubienia: <Typography className={classes.text} component='span' variant='h6'>{like.cake.likes}</Typography>
                                    </div>
                                </Grid >
                            </Grid>
                             
                        </Grid>  
                        <Grid item xs={1}>
                            <UserUnlikeButton
                                cake={like.cake}
                                onHandleOnUnLike={handleOnUnLike}
                            />
                            {/* <IconButton aria-label="add to favorites">
                                <FavoriteIcon  className={classes.icon}/>
                            </IconButton> */}
                        </Grid>
                    </Grid>
                    
                   </div> )})
        }else{ return "" }
    }

    if (isLoading) {
        return  <CircularProgress color="secondary" />
    }

    return (<>
        <Paper >
            <Typography variant='h6'>Twoje polubione ciasta</Typography>
 
            <Grid container >
                {likesToRender()}

            </Grid>
        </Paper>
    
        </>)
}

export default withStyles(styles)(UserLikeData);

