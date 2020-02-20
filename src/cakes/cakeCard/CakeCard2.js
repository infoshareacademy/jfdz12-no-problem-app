import React from 'react';
import { withStyles, Grid, Typography, Avatar, Divider,} from '@material-ui/core';
import { CardMedia, Card, CardActions, CardContent, CardHeader, CardActionArea } from '@material-ui/core';
import CookLabel from './CookLabel';
import {Link} from 'react-router-dom';
import LikeCakeButton from './LikeCakeButton'

const styles ={
    avatar:{
        fontSize: '12px',
        fontWeight: 'bold',
        width: 80,
        height: 30,
    },
    card : {
        margin: '6px',  
        width:'100%',
        minWidth: '250px',
        "&:hover" :{
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 2px 1px, rgba(0, 0, 0, 0.16) 0px 4px 8px 0px',
            transform: 'scale(1.03)',
        }
    },

    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    grid:{
        padding: '10px',
    }
  }


function CakeCard2 (props) {
    
    const { name, imgURL, price, glutenFree, id, likes,} = props.cake;
    const { type, likedCake } = props;
    const { classes } = props;
    const typeBackGrColor = `${type.color}08`;
    const likeColor = likedCake ? 'red' : 'grey';

    return(
        <Grid container >
            <Card className={classes.card} 
                style={{backgroundColor:typeBackGrColor}}
            >
                <CardHeader
                    titleTypographyProps={{align: "left", variant:"h6"}}
                    title={name}
                    subheaderTypographyProps={{align: "left"}}
                    subheader={`Cena: ${price} zł/kg` }
                />
                <CardActionArea component={Link} to={`/cake/${id}`} >
                    <CardMedia
                        className={classes.media}
                        image={imgURL}
                        title="cake"
                    />
                    <CardContent>
                        <Grid container justify="space-between" alignItems='center' className={classes.grid}>
                            <Avatar 
                                variant="rounded" 
                                className = {classes.avatar} 
                                style={{backgroundColor: type.color}}
                            >
                                <div style={{display:'block'}}>{type.name}</div> 
                            </Avatar>
                            <Typography>
                                bezglutenowe:  {glutenFree ? ' tak': ' nie'}
                            </Typography>
                        </Grid>
                        
                        <Divider />
                        
                        <Typography variant="body2" color="textSecondary" component="div">
                            <CookLabel cook = {props.cook} />
                        </Typography>
        
                    </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions  >
                    <Grid container justify='space-between' alignItems='center' className={classes.grid}>
                        <Typography component='div'>
                            polubiło to:  {likes}
                        </Typography>
                        <LikeCakeButton
                            cake={props.cake}
                            likeColor={likeColor}
                            userIdInStore= {props.userIdInStore}
                            //onHandleOnLike={this.handleOnLike}
                            lbutton={'iconButton'}
                        />
                        {/* <IconButton aria-label="add to favorites">
                            <FavoriteIcon style={{color: likeColor}}/>
                        </IconButton> */}
                    </Grid>

                </CardActions>
                
                </Card>
        </Grid>
    )
}

export default withStyles(styles)(CakeCard2);