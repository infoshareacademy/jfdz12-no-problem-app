import React from 'react';
import { CardContent,CardMedia, withStyles, Grid, Typography, Paper } from '@material-ui/core';
import CookLabel from './CookLabel';

const styles= {
    paper:{
        padding: '5px 2px',
        margin: '2px 5px',
        },
    media:{
        //minWidth: '100px',
        width: '100%',
        //minHeight: '100px',
        //margin: '5px',
        borderRadius: '5px',
        height: '120px',
        // border: '1px solid black',
    },
    data:{
        paddingTop:'5px ',
        paddingBottom: '5px',
        paddingRight: '10px',
        paddingLeft: '10px',
        //border: '1px solid black',
    },

    gridPaddingLeft:{
        paddingLeft: '5px',
    },
    gridPaddingRight:{
        paddingRight: '5px',
    },
    typeLabel:{
        float:'right',
        padding: '2px 8px',
        borderRadius: '4px',
        color: 'white',
        fontWeight: 'bold',
    },
}

class CakeCard extends React.Component{
    
    render(){
        const { name, imgURL, price, description, glutenFree } = this.props.cakes;
        const { typeName, typeColor } = this.props.type;
        const { classes } = this.props;

        return( <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className = {classes.paper} >
                        <Typography variant="h6"> {name}</Typography> 
                    </Paper> 
                </Grid>
                 
                <Grid item xs>
                    <Paper className = {classes.paper}>
                        <Grid item xs={12} container wrap = 'nowrap'>
                            <Grid item xs={5} className = {classes.gridPaddingLeft}>
                                <CardMedia image = {imgURL} 
                                    className = {classes.media} 
                                />
                            </Grid>
                            <Grid item xs={7} className = {classes.gridPaddingRight}>
                                <Grid item xs container justify='space-between' className = {classes.data}>
                                        <Typography variant="subtitle1" > Cena: </Typography> 
                                        <Typography variant="subtitle1" > {price} zł </Typography> 
                                </Grid>
                                <Grid item xs>
                                    <Grid item xs container justify='space-between' className = {classes.data}>
                                        <Typography variant="subtitle1" >Kategoria: </Typography> 
                                        <Typography className={classes.typeLabel} style={{backgroundColor: typeColor}}>
                                            {typeName}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs container justify='space-between' className = {classes.data} >
                                    <Typography variant="subtitle1"> bezglutenowe: </Typography>
                                    <Typography variant="subtitle1"> {glutenFree ? ' tak': ' nie'} </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>         
                </Grid>
            
                <Grid item xs= {12}>
                    <Paper className={classes.paper}> 
                        <CookLabel cook = {this.props.cook.cookData} />
                    </Paper>    
                </Grid>
                
            </Grid>
        </>)
    }
}

export default withStyles(styles)(CakeCard);

// <Grid item xs className = {classes.dataLeft}>
//     <Typography variant="subtitle1" > 
//         Cena: 
//     </Typography> 
// </Grid>
// <Grid item xs className = {classes.dataRight}>
//     <Typography variant="subtitle1" > 
//         {price} zł 
//     </Typography> 
// </Grid>