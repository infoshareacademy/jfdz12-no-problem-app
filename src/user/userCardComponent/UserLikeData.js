import React from 'react';
import { Grid, Paper, Typography, } from '@material-ui/core';


export function UserLikeData(props){

    const {likes} = props;

    const likesToRender = () => {
        if(likes.length>0){
            return likes.map ((like) => { 
                return (
                    <div style={{margin: '10px'}}>
                        <img src = {like.cake.imgURL} alt="cake foto" style={{width:'200px', height:'100px'}}></img>
                        <div>data: {like.date}</div>
                        <div>opis:{like.content}</div> 
                        <div>nazwa ciasta:{like.cake.name}</div> 
                        <div>opis ciasta: {like.cake.description}</div> 
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