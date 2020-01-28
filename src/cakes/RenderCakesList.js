import React from 'react';
import {filterCondition} from './filter/FilterCondition'
import CakeCard2 from './cakeCard/CakeCard2';
import CakeCard from './cakeCard/CakeCard';
import { Grid,  } from '@material-ui/core';
import {SORTOPTIONS} from '../constans/selectConstans'


export class RenderCakesList extends React.Component {
    userIdRef = sessionStorage.getItem('userId') || '';

    findDataById = (data, id) => data.find((data) => data.id === id) || {};

    getFilteredCakes(){
        const { cakes, 
                cooks, 
                filterCook, 
                filterCake, 
                filterChecked, 
                filterTypesId, 
                filterLocation, 
                filterAll, 
                filterAllToogle,
                priceRange } = this.props.state;
                
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
                    filterAllToogle,
                    priceRange )
                )
            });
    }

    getSorteredCakes(){
        const filteredCakes = this.getFilteredCakes();
        const { sortById } = this.props.state;
        const sortData = SORTOPTIONS.find(sortoption => sortoption.id === sortById);

        const sortedCakes =
            filteredCakes.sort((a, b) => {
                const sA = a[sortData.field];
                const sB = b[sortData.field]
              
                if ( sortData.type === 'string' ) {
                    return (sA.toLowerCase()).localeCompare(sB.toLowerCase());
                } else {     
                    return Number(sA) - Number(sB);
                }
            });
                
            if (sortData.order === 'desc'){
                sortedCakes.reverse();
            };
                
            return sortedCakes;
        };

    render(){
        const { cooks, types, toogleView } = this.props.state;
        const filteredSortedCakes = this.getSorteredCakes();
        
        return(    
            <Grid container spacing={1} justify='center' >
                
                {filteredSortedCakes.map((cake)=>{
                    
                    const likedCake = cake.likesUsersId
                                ? cake.likesUsersId.includes(this.userIdRef)
                                : '';
                    
                    return (
                        <Grid 
                            container wrap='wrap' 
                            key = {cake.id} 
                            item 
                            xs={12} sm={6} md={4}
                        >
                            {toogleView 
                                ? <CakeCard2 
                                    cake = {cake}
                                    type = {this.findDataById(types, cake.typeId)}
                                    cook = {this.findDataById(cooks, cake.cookId)}
                                    likedCake = {likedCake}
                                /> 
                                : <CakeCard 
                                    cake = {cake}
                                    type = {this.findDataById(types, cake.typeId)}
                                    cook = {this.findDataById(cooks, cake.cookId)}
                                    likedCake = {likedCake}
                                />
                            }
                            
                        </Grid>
                    )}
                )}
            </Grid>
        )
    }
}
