import React, { useEffect, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { getCakes, } from '../api/Api2';
import { CircularProgress } from '@material-ui/core';
import PageWrapper from '../components/PageWrapper';


const useStyles = makeStyles({
   mainContainer: {
    paddingTop:'50px', 
    paddingBottom: '50px'
   },
    card: {
      width: '97%',
      height: '100%',
     
    },
    media: {
      height: 200,
    },
    more: {
      textAlign: 'center',
      color: 'rgb(185, 19, 124)',
      paddingTop: 5
    }
  });

 const BestCakes = () => {

	const [cakes, setCakes] = useState([]);
	const [isLoading, setIsLoading ] = useState(true);

    useEffect(()=>{
      getCakes()
			.then(data => setCakes(data))
			.catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`))
			.finally(() => setIsLoading(false))
		},[]
    )
    
    const classes = useStyles();
    const sortedCakes = cakes.sort((a,b)=>b.likes-a.likes);
    const slicedSortCakes = sortedCakes.slice(0,3);
    const listOfCakes = slicedSortCakes.map(cake=> 
      <Grid key={cake.id} item   
              xs={12} 
              md={4}
              >
     
      <Card className={classes.card}  >
            <CardActionArea component={Link} to={`/cake/${cake.id}`}>
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

if (isLoading) {
	return (
		<div className="App">
      <PageWrapper>
			  <CircularProgress color="secondary" />
      </PageWrapper>
		</div>
	)
}

return(
    <Container>
      <h1>Nasze najbardziej lubiane ciasta</h1>
         <Grid container>
            {listOfCakes}
        </Grid>
       <Link to='/cakes' style={{textDecoration: 'none'}}>
       <p className={classes.more}>Zobacz więcej</p>
       </Link>
    </Container>   
  )
 }


export default BestCakes;