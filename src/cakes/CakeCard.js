import React from 'react';
import { Card, CardContent,CardMedia, withStyles, Grid, Icon, Button, Typography, Paper } from '@material-ui/core';
import TypeLabel from './TypeLabel';
import CookLabel from './CookLabel';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles= {
    root:{
        padding: '5px 2px',
        margin: '5px',
        },
    paper:{
        margin: '5px',
        padding: '5px',
        minWidth: '100px',
        minHeight: '100px',
    },
    media:{
        minWidth: '100px',
        width: '100%',
        minHeight: '100px',
        margin: '5px',
        borderRadius: '5px',
    },
    dataLeft:{
        textAlign: 'left',
    },
    dataRight:{
        float:'right',
    }
    
}

class CakeCard extends React.Component{
    
    render(){
        const { name, imgURL, typeId, cookId, price, description, glutenFree } = this.props.cakes;
        const {classes} = this.props

        return( <>
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <Paper className = {classes.root} >
                        <Typography variant="h5"> {name}</Typography> 
                    </Paper> 
                </Grid>
                <Grid item>
                    <CardMedia image={imgURL} 
                        className= {classes.media} 
                    />
                </Grid>
                <Grid item xs={12} sm container >
                    
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" > 
                            <span >Cena: </span>
                        </Typography>
                        <Typography variant="subtitle1" > 
                            <span >Kategoria: </span>
                        </Typography>
                        
                        <Typography variant="subtitle1" > 
                            <span >bezglutenowe: </span>
                        </Typography>
                     </Grid>
                     <Grid item xs={6} alignItems='flex-end'>
                        <Typography variant="subtitle1" > 
                            {price} zł
                        </Typography>
                        <Typography variant="subtitle1" component='p'>
                            <p><TypeLabel typeId = {typeId} /> </p>
                        </Typography>
                        
                        <Typography variant="subtitle1" > 
                            {glutenFree ? ' tak': ' nie'}
                        </Typography>
                     </Grid>         
                </Grid>
                
                <Grid item xs={12}>
                    <Typography>{description}</Typography>
                </Grid>
                <Grid item xs= {12}>
                    <CardContent> <CookLabel cookId = {cookId} /></CardContent>    
                </Grid>
                
            </Grid>
        </>)
    }
}

export default withStyles(styles)(CakeCard);
