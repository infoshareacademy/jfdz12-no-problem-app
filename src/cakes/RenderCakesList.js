import React from 'react';
import {filterCondition} from './filter/FilterCondition'
import CakeCard from './CakeCard';
import {styles} from './CakeStyles';
import { Grid, Paper, withStyles } from '@material-ui/core';

function MyPaperRaw (props) {
    const { classes, ...other } = props;
    return <Paper className={classes.paper} {...other} />;
}
  
const MyPaper = withStyles(styles)(MyPaperRaw);

export class RenderCakesList extends React.Component{
    
    constructor(props){
        super(props);
        this.openCakeCard = this.openCakeCard.bind(this);
    }

    openCakeCard(id,e) {
        this.props.onCakeCardOpen(id,e)
    };

    findDataById = (data, id) => data.find((data) => data.id === id) || {};

    getFilteredCakes(){
        const { cakes, cooks, filterCook, filterCake, filterChecked, filterTypesId, filterLocation, filterAll, filterAllToogle } = this.props.state;

        return cakes
                .filter (cake => {
                    return(
                    filterCondition( cake, 
                        filterAllToogle ? filterCake : filterAll, 
                        filterChecked, 
                        filterTypesId, 
                        this.findDataById(cooks, cake.cookId),
                        filterAllToogle ? filterCook : filterAll,
                        filterAllToogle ? filterLocation : filterAll,
                        filterAllToogle )
                    )
                });
    }

    render(){
        const { cooks, types } = this.props.state;

        const filteredCakes = this.getFilteredCakes();
        
        return(    
            <Grid container spacing={2}  justify='center' >
                {filteredCakes.map((cake)=>{
                    return (
                        <Grid container wrap='wrap' key = {cake.id} item xs={12} sm={6} md={4}  >
                            <MyPaper >
                                <CakeCard 
                                    cake = {cake}
                                    type = {this.findDataById(types, cake.typeId)}
                                    cook = {this.findDataById(cooks, cake.cookId)}
                                    onCakeCardOpen = {this.openCakeCard}
                                />
                            </MyPaper>
                        </Grid>
                    )}
                )}
            </Grid>
        )
    }
}
