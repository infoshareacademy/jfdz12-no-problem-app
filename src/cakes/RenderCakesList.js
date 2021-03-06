import React from 'react';
import { filterCondition } from './filter/FilterCondition'
import CakeCard2 from './cakeCard/CakeCard2';
import CakeCard from './cakeCard/CakeCard';
import { Grid, Typography, CircularProgress } from '@material-ui/core';
import { SORTOPTIONS } from '../constans/selectConstans'
import {connect} from 'react-redux';


class RenderCakesList extends React.Component {

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
        const { cooks, types, toogleView, priceRange } = this.props.state;
        const { userIdInStore, isLoadingUser }  = this.props;
        const filteredSortedCakes = this.getSorteredCakes();
        
        if(isLoadingUser ){
            return <CircularProgress color="secondary" />
        }

        if(Number(priceRange[0])>Number(priceRange[1])) {
            return <Typography variant="h6">
                        Cena od jest wyższa od ceny do, zmień parametry aby wyświetlić wyniki !
                    </Typography>
        }

        if(!filteredSortedCakes.length || filteredSortedCakes.length<1){
            return <Typography variant="h6">
                        Żadne ciasto nie pasuje do wyników wyszukiwania
                    </Typography>
        }

        return(    
            <Grid container spacing={1} justify='center' >
                
                {filteredSortedCakes.map((cake)=>{
                    
                    const likedCake = cake.likesUsersId
                                ? cake.likesUsersId.includes(userIdInStore)
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
                                    userIdInStore= {this.props.userIdInStore}
                                    userInStore={this.props.userInStore}
                                    onHandleOnLike={this.props.onHandleOnLike}
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

const mapStateToProps = (state) => ({
    userInStore: state.userReducer.user,
    userIdInStore: state.userReducer.userId,
    isLoadingUser: state.userReducer.isLoading,  
});

export default connect( mapStateToProps, null)(RenderCakesList);