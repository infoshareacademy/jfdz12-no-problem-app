import React from 'react';
import { Container, Typography, Button, Grid, CardMedia, Paper } from '@material-ui/core';
import CookLabel from './CookLabel';

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
        return (
            <Container maxWidth = "lg" >
                <Grid >

                    <Paper style={{padding: '30px 10px', margin: '10px'}}>
                        <Typography variant="h4">{cake.name}</Typography>
                    </Paper>
                    
                    <Grid container wrap='wrap'>
                        <Grid item xs={6} style={{padding:'10px'}}>
                            <CardMedia image={cake.imgURL} style={{width: '100%', height:'100%', padding: '10px'}}/>
                        </Grid>
                        <Grid item xs={6} direction='column'>
                            <Paper style={{margin: '10px', padding:'40px 10px'}}>
                                
                                <Typography variant='h2'>
                                    Cena:{cake.price}
                                </Typography>
                                
                            </Paper>
                            <Paper style={{margin: '10px', padding:'40px 10px'}}>
                                <h2>katrgoria: {type.name}</h2>
                            </Paper>
                            <Paper style={{margin: '10px', padding:'40px 10px'}}>
                                opis ciasta: 
                                <h3>{cake.description}</h3>
                            </Paper> 

                        </Grid>
                            
                    </Grid>
                    
                    <Paper style={{margin:'10px'}}>
                        <CookLabel cook = {cook}/>
                    </Paper>
                    
                    
                    <Button onClick={this.openCakeCard} 
                            variant="outlined" 
                            color="secondary"
                    > 
                        powrót 
                    </Button>
                    
                </Grid>
            </Container>
        )    
    }

}

export default CakeCardFull;