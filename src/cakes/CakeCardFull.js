import React from 'react';
import { Container, Typography, Button, Grid, CardMedia, Paper, withStyles } from '@material-ui/core';
import {styles} from './CakeStyles';
import CookLabelFull from './CookLabelFull';

class CakeCardFull extends React.Component{
    constructor(props){
        super(props);
        this.openCakeCard = this.openCakeCard.bind(this);    
    }

    openCakeCard(id,e) {
        this.props.onCakeCardOpen(id,e);
    }

    render(){
        const { cake, cook, type } = this.props;
        const { classes }  = this.props;
        const typeColor = type.color;

        return (
            <Container maxWidth = "lg" style={{paddingTop:'100px'}}>
                <Grid>

                    <Paper className = {classes.fCardHeader} >
                        <Typography variant="h4">{cake.name}</Typography>
                    </Paper>
                    
                    <Grid container wrap='wrap'>
                        
                        <Grid item xs={12} sm={6} className = {classes.fCardWrapMedia}>
                            <CardMedia image={cake.imgURL} className = {classes.fCardMedia}/>
                        </Grid>
                        
                        <Grid container item xs={12} sm={6} direction='column'>
                            <Paper className={classes.fCardPaper}>
                                
                                <Typography variant='h4' className={classes.fCardPrice}> 
                                    Cena: {cake.price} zł/kg
                                </Typography>
                                <Typography  >
                                        <span className={classes.fCardSubText}>cena za porcję/sztukę: </span> 
                                        <span className={classes.fCardText}>{cake.priceForPortion} zł,</span>
                                </Typography>
                                <Typography>
                                        <span className={classes.fCardSubText}>porcja: </span> 
                                        <span className={classes.fCardText}>{cake.portionDescription}</span>
                                </Typography>
                                
                            </Paper>
                            <Paper className={classes.fCardPaper}>
                                
                                <Typography variant='body1' className={classes.fCardWrapType}>
                                    <span className={classes.fCardSubText}>typ ciasta:</span>
                                    <span className={classes.fCardType} style= {{backgroundColor: typeColor}}>
                                        {type.name}
                                    </span>
                                </Typography>
                                
                                <Typography>
                                    <span className={classes.fCardSubText}>opis: </span>
                                    <span className={classes.fCardText}>{type.description} </span> 
                                </Typography>

                                <Typography>
                                    <span className={classes.fCardSubText}>bezglutenowe: </span>
                                    <span className={classes.fCardText}>
                                        {cake.glutenFree ? "tak" : "nie"} 
                                    </span> 
                                </Typography>
                                
                            </Paper>
                            <Paper className={classes.fCardPaper}>
                                opis ciasta: 
                                <Typography >
                                    <span className={classes.fCardText}>{cake.description}</span>
                                </Typography>
                            </Paper> 

                        </Grid>
                            
                    </Grid>
                    
                    <Paper className={classes.fCardPaper}>
                        <CookLabelFull cook = {cook}/>
                    </Paper>
                    
                    
                    <Button onClick={this.openCakeCard} 
                            variant="outlined" 
                            color="secondary"
                            style = {{margin: '20px auto'}}
                    > 
                        powrót 
                    </Button>
                    
                </Grid>
            </Container>
        )    
    }

}

export default withStyles(styles)(CakeCardFull);