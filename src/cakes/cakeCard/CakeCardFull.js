import React from 'react';
import { Container, Typography, Button, Grid, CardMedia, Paper, withStyles, CircularProgress } from '@material-ui/core';
import {styles} from './CakeCardFullStyle';
import CookLabelFull from './CookLabelFull';
import {getFullCakeById, } from '../../api/Api2';
import PageWrapper from '../../components/PageWrapper';
import { Link } from 'react-router-dom';
import { LikeCake } from './LikeCake';

class CakeCardFull extends React.Component{
    constructor(props){
        super(props);
        this.userIdRef = sessionStorage.getItem('userId');
        this.state ={
            cake:{},
            isLoading: true,
            error: '',
            userCanEdit: false,
        }
    }

    componentDidMount(){
        this.fetchCakeData();
    }

    fetchCakeData = () => {
        const cakeId = this.props.match.params.id;
        getFullCakeById(cakeId)
            .then(data => {
                this.setState({
                    cake: data,
                    userCanEdit: data.cookId === this.userIdRef ? true : false
                })
            })
            .catch(error => this.setState({error: error.toString()}))
            .finally(() => this.setState({isLoading: false}))
    }

    handleOnLike = () => {
        this.fetchCakeData();
    }
 
    render(){
        const { type, cook } = this.state.cake;
        const { classes }  = this.props;
        const { isLoading, cake, userCanEdit} = this.state;
        
        if(isLoading){
            return (<PageWrapper>
                        <CircularProgress color="secondary" />
                </PageWrapper>)
        }

        return (
            <PageWrapper>

                <Container maxWidth = "lg" >
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
                                        <span className={classes.fCardType} style= {{backgroundColor: type.color}}>
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

                                    <Typography>
                                        <span className={classes.fCardSubText}>polubienia: </span>
                                        <span className={classes.fCardText}>{cake.likes} </span>
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
                        
                        <Grid container justify='center' alignItems='center'>

                            <LikeCake 
                                cake={cake}
                                onHandleOnLike = {this.handleOnLike}
                            />
                            {userCanEdit && 
                                <Button 
                                    component={Link} to={`/cakeAdd/${cake.id}`}
                                    variant="outlined" 
                                    color="primary"
                                    className = {classes.fCardButton}
                                > 
                                    edytuj 
                                </Button>
                            }
                            <Button 
                                onClick = {this.props.history.goBack}
                                variant="outlined" 
                                color="secondary"
                                className = {classes.fCardButton}
                            > 
                                powrót 
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </PageWrapper>
        )    
    }

}

export default withStyles(styles)(CakeCardFull);