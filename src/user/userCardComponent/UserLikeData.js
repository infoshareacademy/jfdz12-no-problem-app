import React from 'react';
import { Grid, Paper, Typography, } from '@material-ui/core';


export function UserLikeData(props){

    const {likes} = props;

    const likesToRender = () => {
        if(likes.length>0){
            return likes.map ((like) => { 
                return (
                    <div style={{margin: '10px'}}> 
                        {like.cake.name} 
                        {like.cake.description} 
                    </div>
                    )})
        }else{ return "" }
    }

    console.log(likesToRender())

    return (
        <Paper >
            <Typography variant='h6'>Twoje polubione ciasta</Typography>
            <Grid container >
                {likesToRender()}

            </Grid>
        </Paper>
    
        )
}