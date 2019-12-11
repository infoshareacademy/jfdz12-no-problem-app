import React from 'react';
import filterCondition from './filter/FilterCondition'
import CakeCard from './CakeCard';
import {styles} from './CakeStyles';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

function RenderCakesList(props){
    const { cakes, cooks, types, filterCook, filterCake, filterChecked, filterSelected } = props.state;
    const { classes } = props;

    const openCakeCard = () => props.onCakeCardOpen();
    
    const findDataById = (data, id) => data.find((data) => data.id === id) || {};

    return(
        
            <Grid container spacing={2}  justify='center' >
                {cakes.map((cake)=>{
                    if(filterCondition( cake, 
                                        filterCake, 
                                        filterChecked, 
                                        filterSelected, 
                                        findDataById(cooks, cake.cookId),
                                        filterCook )
                        ){ 
                        return (
                            <Grid container wrap='wrap' key = {cake.id} item xs={12} sm={6} md={4}  >
                                <Paper className={classes.paper}>
                                    <CakeCard 
                                        cake = {cake}
                                        type = {findDataById(types, cake.typeId)}
                                        cook = {findDataById(cooks, cake.cookId)}
                                        onCakeCardOpen = {openCakeCard}
                                    />
                                </Paper>
                            </Grid>
                        )}
                    return '';
                    })
                }
            </Grid>
        
    )
}

export default withStyles(styles)(RenderCakesList);