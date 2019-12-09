import React from 'react';
import { CardContent,CardMedia, withStyles, Grid, Icon, Button, Typography, Paper } from '@material-ui/core';
import TypeLabel from './TypeLabel';
import CookLabel from './CookLabel';

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
        //minWidth: '100px',
        width: '100%',
        //minHeight: '100px',
        //margin: '5px',
        //borderRadius: '5px',
        height: '120px',
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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className = {classes.root} >
                        <Typography variant="h5"> {name}</Typography> 
                    </Paper> 
                </Grid>
                <Grid item xs={12} container>
                    <Grid item xs={5} style = {{padding: "5px"}}>
                        <CardMedia image={imgURL} 
                            className= {classes.media} 

                        />
                    </Grid>
                    <Grid item xs={7} >
                        <Grid item xs style = {{padding: "5px 10px 5px 5xp"}}>
                            <Typography variant="subtitle1" > 
                                <span style={{textAlign: "left"}}>Cena: </span> <span style={{float:"right"}}>{price} zł </span>
                            </Typography> 
                        </Grid>
                        <Grid item xs style = {{padding: "6px"}}>
                                <span >Kategoria: </span> <TypeLabel typeId = {typeId} />
                        </Grid>
                        <Grid item xs style = {{padding: "6px"}}>
                            
                                <span >bezglutenowe:</span> <span style={{float:"right"}}>{glutenFree ? ' tak': ' nie'}</span>
                             
                        </Grid>
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
