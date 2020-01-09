import React from 'react';
import { Grid, Paper, Typography, Divider, Avatar, withStyles } from '@material-ui/core';


const styles ={
    avatar:{
        fontSize: '12px',
        fontWeight: 'bold',
        width: 80,
        height: 30,
    },
    gird:{
        padding: '8px',
    }
}

function UserLikeData(props){

    const {likes, classes} = props;

    const likesToRender = () => {
        if(likes.length>0){
            return likes.map ((like) => { 
                return (
                    <div>
                    <Grid key={like.id} xs ={12} container item style={{margin: '10px'}}>
                        <Grid item xs={2}>
                            <img src = {like.cake.imgURL} alt="cake foto" style={{width:'100%', height:'100%'}}></img>
                        </Grid>
                        <Divider orientation='vertical'/>
                        <Grid item xs={2} container justify='center' alignItems='center'>
                            <Grid>
                                {like.date}
                            </Grid>
                            <Grid>
                                <Avatar 
                                    variant="rounded" 
                                    className = {classes.avatar} 
                                    style={{backgroundColor: like.cake.typeColor}}
                                >
                                    <div style={{display:'block'}}>{like.cake.typeName}</div> 
                                </Avatar>
                                
                            </Grid> 
                        </Grid>
                        <Divider orientation='vertical'/>
                        
                        <Grid style={{padding:'7px'}} item xs={3} container  alignContent='center'>
                            <Typography >nazwa ciasta: </Typography>
                            <Typography >{like.cake.name}</Typography>
                        </Grid>
                        <Divider orientation='vertical'/> 
                        <Grid containter justify = 'flex-start' item xs style={{padding:'7px', align: 'left'}}>
                            <Typography align='left'>opis:</Typography>
                            <Typography align='left'>{like.content}</Typography>
                        </Grid> 
                    </Grid>  
                    <Divider />
                    
                    </div>)})
        }else{ return "" }
    }


    return (
        <Paper >
            <Typography variant='h6'>Twoje polubione ciasta</Typography>
            <Divider/>
            <Grid container >
                {likesToRender()}

            </Grid>
        </Paper>
    
        )
}

export default withStyles(styles)(UserLikeData);