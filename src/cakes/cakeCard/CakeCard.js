import React from 'react';
import { IconButton, CardMedia, withStyles, Grid, Typography, Paper, Card, CardActionArea, Chip } from '@material-ui/core';
import CookLabel from './CookLabel';
import { styles } from '../CakeStyles';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';

function CakeCard (props) {

    const { name, imgURL, price, glutenFree, id, likes } = props.cake;
    const { type, likedCake } = props;
    const { classes } = props;
    const likeColor = likedCake ? 'red' : 'grey';
  
    return(
        <Paper className={classes.mainPaper} >
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card className = {classes.paper} >
                        <Grid container justify='space-between' alignItems='center' wrap='nowrap'>
                            <Typography style={{marginLeft:'20px'}} variant="h6">
                                {name}  
                            </Typography>
                        </Grid>
                    </Card> 
                </Grid>
                    
                <Grid item xs>
                    <Paper className = {classes.paper}>
                        <CardActionArea component={Link} to={`/cake/${id}`} > 
                            <Grid item xs={12} container wrap = 'nowrap'>
                                <Grid item xs={5} className = {classes.gridPaddingLeft}>
                                    <CardMedia image = {imgURL} 
                                        className = {classes.media} 
                                    />
                                </Grid>
                                <Grid item xs={7} className = {classes.gridPaddingRight}>
                                    <Grid item xs container justify='space-between' className = {classes.data}>
                                            <div className={classes.cCardLabelTitle} > Cena: </div> 
                                            <div className={classes.cCardLabelText} > {price} zł/kg </div> 
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
                                    <Grid item xs 
                                        container 
                                        justify='space-between'
                                        alignItems='center' 
                                        className = {classes.data} 
                                        >
                                            <div className={classes.cCardLabelTitle}> 
                                                polubienia: {likes}
                                            </div>
                                            <div className={classes.cCardLabelText}> 
                                                
                                                <IconButton style={{padding: '0px'}}>
                                                    <FavoriteIcon  style={{color: likeColor}}/>
                                                </IconButton> 
                                            </div>
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