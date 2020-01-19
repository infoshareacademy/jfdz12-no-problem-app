import React from 'react';
import CakeFilters from './filter/CakeFilters';
import { CircularProgress, Container, Grid } from '@material-ui/core';
import { RenderCakesList } from './RenderCakesList';
import FilterAll from './filterAll/FilterAll';
import { FilterVisibleToogle } from '../menu/FilterVisibleToogle';
import ToogleView from './ToogleView';
import {getFullData} from '../api/Api2';

export class CakesList extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            cakes: [],
            cooks: [],
            types:[],
            filterCake: '', 
            filterCook: '',
            filterLocation:'',
            filterAll: '',
            filterChecked: false,
            loading: true,
            filterTypesId:[],
            filterAllToogle: false,
            priceRange: [],
            sortById: 0,
            cakesMaxId: 0,
            filterVisibility: false,
            toogleView: false,
        };
        this.filterChange = this.filterChange.bind(this);
        this.handleToogleChange = this.handleToogleChange.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSortBy = this.handleSortBy.bind(this);
        this.handleFilterVisibility = this.handleFilterVisibility.bind(this);
    }

    componentDidMount() {
        getFullData()
            .then(data => {
                
                const price = data[0].map(el => el.price); 
                this.setState({
                    cakes: data[0],
                    cooks: data[1],
                    types: data[2],
                    priceRange: [Math.min(...price),Math.max(...price)],
                    cakesMaxId: Math.max(...data[0].map(el => (el.id))), 
                })
            })
            .catch(error => this.setState({error: error.toString()}))
            .finally(() => this.setState({loading: false}))
    }
    
    handleFilterVisibility(){
    
        this.setState( prevState => ({
            filterVisibility: !prevState.filterVisibility,
            })
        );
      }

    filterChange (event){
        let value = null;

        if(event.target.type === 'checkbox'){
            value = event.target.checked;
        }else{
            value = (/^[a-zA-Z0-9]+$/.test(event.target.value) || event.target.value==="")
                ? event.target.value
                : this.state[event.target.name]
        }

        this.setState ({
            [event.target.name]: value,
        })           
    } 

    handleTypeToggle = value => {
        const {filterTypesId} = this.state;
        const currentIndex = filterTypesId.indexOf(value);
        const newChecked = [...filterTypesId];
        
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        
        this.setState({filterTypesId: newChecked});
    };

    reset = (id) => this.setState({[id]: ''});

    handleChangeType = (event,value) => {
        this.setState({ 
            filterTypesId: value.map(el =>el.id), 
        })
    }
    
    handleToogleChange(e) { 
        this.setState(prevState => ({
            filterAllToogle:  !prevState.filterAllToogle,
        })) 
    }

    handleChangePrice(event ){
        const min = event.target.name === 'min' ? event.target.value : this.state.priceRange[0];
        const max = event.target.name === 'max' ? event.target.value : this.state.priceRange[1]; 
        
        this.setState({
            priceRange: [min,max],
        })
    }

    handleSortBy(event){
        this.setState({
            sortById: event.target.value,
        })
    }

    handleToogleView = () =>{
        this.setState(prevState =>({
            toogleView: !prevState.toogleView,
        }))
    }

    findDataById = (data, id) => data.find((data) => data.id === id) || {};
      
    render(){    
 
        const { types, 
                loading, 
                filterAll,
                filterCook, 
                filterCake,
                filterLocation, 
                filterChecked, 
                filterAllToogle,
                filterTypesId,
                priceRange,
                sortById,
                toogleView,
            } = this.state;
        
        const { filterVisibility } = this.state;
        
        if(loading){
            return ( <div style={{paddingTop:'100px'}} >
                <CircularProgress/>
            </div>
            )
        }

        if (!loading) {
            return <>
                <Container maxWidth = "lg" style={{paddingTop:'100px'}}>       
                
                    <Grid container direction={filterVisibility && filterAllToogle ? 'row' : 'column'}>
                        {filterVisibility && filterAllToogle &&
                            <Grid item xs={12} sm={3} md={2}> 
                                <CakeFilters 
                                    types = {types}
                                    filterCakeName = {filterCake}
                                    filterCookName = {filterCook}
                                    filterLocationCity = {filterLocation}
                                    filterAllToogle = {filterAllToogle}
                                    checkboxChecked ={filterChecked}
                                    priceRange = {priceRange}
                                    sortById = {sortById} 
                                    onFilterChange = {this.filterChange}
                                    onReset = {this.reset}
                                    onCheckedType = {this.handleChangeType}
                                    onHandleToogleChange= {this.handleToogleChange}
                                    onHandleChangePrice = {this.handleChangePrice}
                                    onHandleSortBy = {this.handleSortBy}
                                />
                            </Grid>
                        }
                        {filterVisibility && !filterAllToogle &&
                            <Grid item xs={12} >
                                <FilterAll
                                    filterTypesId ={filterTypesId} 
                                    filterAll = {filterAll}
                                    filterAllToogle = {filterAllToogle}
                                    types = {types}
                                    onHandleToogleChange= {this.handleToogleChange}
                                    onFilterChange = {this.filterChange}
                                    onHandleTypeToggle = {this.handleTypeToggle}
                                />
                            </Grid>
                        }
                        <Grid item 
                            xs={12} 
                            sm={filterVisibility && filterAllToogle ? 9 : 12}
                            md={filterVisibility && filterAllToogle ? 10 : 12}
                        >
                            <RenderCakesList
                                state = {this.state}
                                toogleView = {toogleView}
                            />
                        </Grid>   
                    </Grid> 
                    
                    <ToogleView 
                        onHandleToogleView = {this.handleToogleView} 
                        toogleView = {toogleView}
                    />

                    <FilterVisibleToogle handleFilterVisibility={this.handleFilterVisibility}/>
                
                </Container>
            </>
        }
    }
}
