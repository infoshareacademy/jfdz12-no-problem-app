import React from 'react';
import CakeFilters from './filter/CakeFilters';
import { CircularProgress, Container, Grid, Button } from '@material-ui/core';
import CakeCardFull from './CakeCardFull';
import { RenderCakesList } from './RenderCakesList';
import './Cake.css';
import FilterAll from './filterAll/FilterAll';
import CakeAddForm from './CakeAddForm/CakeAddForm';

export class CakesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cakes: [],
            cooks: [],
            types:[],
            cakesAndCooks:[],
            filterCake: '', 
            filterCook: '',
            filterLocation:'',
            filterAll: '',
            filterChecked: false,
            cakeCardOpen: false,
            CakeCardOpenId: null,
            loading: true,
            filterTypesId:[],
            filterAllToogle: false,
            priceRange: [],
            sortById: 0,
            cakeAddFormOpen: false,
        };
        this.filterChange = this.filterChange.bind(this);
        this.handleToogleChange = this.handleToogleChange.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSortBy = this.handleSortBy.bind(this);
        this.handleCakeAddForm = this.handleCakeAddForm.bind(this);
    }

    componentDidMount() {
        Promise.all([
            fetch('./cakes.json').then(res => res.json()),
            fetch('./cooks.json').then(res => res.json()),
            fetch('./types.json').then(res => res.json()),
        ]).then(data => {
            const price = data[0].map(el => el.price); 
            this.setState({
                cakes: data[0],
                cooks: data[1],
                types: data[2],
                priceRange: [Math.min(...price),Math.max(...price)],
                loading: false,
            })
        })
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

    openCakeCard = (id,e) => {
        this.setState({ cakeCardOpen: this.state.cakeCardOpen ? false : true,
                        cakeCardOpenId: id,});
    };

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

    handleCakeAddForm(){
        this.setState(prevState =>({
            cakeAddFormOpen: !prevState.cakeAddFormOpen,
        }))
    }
    
    findDataById = (data, id) => data.find((data) => data.id === id) || {};
      
    render(){    
        const { cakeCardOpen, 
                cakeCardOpenId, 
                cakes, 
                cooks, 
                types, 
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
                cakeAddFormOpen,
            } = this.state;
        
        const { filterVisibility } = this.props;

        if (!cakeAddFormOpen && !cakeCardOpen && !loading) {
            return <>
                <Container maxWidth = "lg" >
                    <Grid>
                        <Button onClick= {this.handleCakeAddForm} variant='outlined' >
                            dodaj nowe cisto
                        </Button>
                    </Grid>
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
                                onCakeCardOpen = {this.openCakeCard}
                            />
                        </Grid>   
                    </Grid> 
                </Container>
            </>
        }

        if(cakeCardOpen && !loading){
            const oneCake = this.findDataById (cakes, cakeCardOpenId);

            return (
                <CakeCardFull 
                    onCakeCardOpen = {this.openCakeCard}
                    cakeCardOpenId = {cakeCardOpenId}
                    cake = {oneCake}
                    type = {this.findDataById(types, oneCake.typeId)}
                    cook = {this.findDataById(cooks, oneCake.cookId)}
                />
            )
        }

        if(cakeAddFormOpen && !loading ){
            return <CakeAddForm 
                onHandleCakeAddForm = {this.handleCakeAddForm}
                cooks = {cooks}
            />
        }

        if(loading){
            return ( 
               <CircularProgress/>
            )
        }


    }
}
