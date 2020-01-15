import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
   
    card: {
      width: '80%',
      height: '100%',
      
    },
    media: {
      height: 200,
    },
  });

 const BestCakes = (props) => {
   
    const classes = useStyles();
    const sortedCakes = props.cakes.sort((a,b)=>b.likes-a.likes);
    const slicedSortCakes = sortedCakes.slice(0,3);
    const cakes =  slicedSortCakes.map(cake=> 
      <Grid item   
              xs={12} 
              md={4}
              style={{marginBottom:'5%'}}>
      <Card className={classes.card} >
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={cake.imgURL}
                title={cake.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {cake.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {cake.description}
                </Typography>
            </CardContent>
            </CardActionArea>
           
       </Card>
       </Grid>);

return(
    <Container maxWidth = "80%" style={{paddingTop:'100px', paddingBottom:'100px'}}>
      <h1>Nasze najbardziej lubiane ciasta</h1>
         <Grid container>
          
         
            {cakes}

            </Grid>
       
    
       <Link to='/cakes'>
       <p>Zobacz więcej</p>
       </Link>
    </Container>
   
)
 }
    
   
        
          
            
        
        
    
// )}

export default BestCakes;