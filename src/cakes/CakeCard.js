import React from 'react';
import { CardMedia, withStyles, Grid, Typography, Paper, Card, CardActionArea, Chip } from '@material-ui/core';
import CookLabel from './CookLabel';
import {styles} from './CakeStyles';


function CakeCard (props) {

    const { name, imgURL, price, glutenFree, id } = props.cake;
    const { type } = props;
    const { classes } = props;

    return(
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card className = {classes.paper} >
                        <Typography variant="h6"> {name}</Typography> 
                    </Card> 
                </Grid>
                    
                <Grid item xs>
                    <Paper className = {classes.paper}>
                        <CardActionArea onClick = {(e) => props.onCakeCardOpen( id, e )} >
                            <Grid item xs={12} container wrap = 'nowrap'>
                                <Grid item xs={5} className = {classes.gridPaddingLeft}>
                                    <CardMedia image = {imgURL} 
                                        className = {classes.media} 
                                    />
                                </Grid>
                                <Grid item xs={7} className = {classes.gridPaddingRight}>
                                    <Grid item xs container justify='space-between' className = {classes.data}>
                                            <div className={classes.cCardLabelTitle} > Cena: </div> 
                                            <div className={classes.cCardLabelText} > {price} zł </div> 
                                    </Grid>
                                    <Grid item xs>
                                        <Grid item xs container justify='space-between' className = {classes.data}>
                                            <div className={classes.cCardLabelTitle} >Kategoria: </div> 
                                            <Chip   label = {type.name}
                                                    size = 'small'
                                                    clickable = {false}
                                                    className={classes.typeLabel} 
                                                    style={{backgroundColor: type.color}}
                                                    wrap='wrap'
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs container justify='space-between' className = {classes.data} >
                                        <div className={classes.cCardLabelTitle}> bezglutenowe: </div>
                                        <div className={classes.cCardLabelText}> {glutenFree ? ' tak': ' nie'} </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardActionArea>
                    </Paper>         
                </Grid>
            
                <Grid item xs= {12}>
                    <Paper className={classes.paper}> 
                        <CookLabel cook = {props.cook} />
                    </Paper>    
                </Grid>
                
            </Grid>
        </Paper>
    )
}

export default withStyles(styles)(CakeCard);