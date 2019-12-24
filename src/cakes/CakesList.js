import React from 'react';
import CakeFilters from './filter/CakeFilters';
import { CircularProgress, Container } from '@material-ui/core';
import CakeCardFull from './CakeCardFull';
import {RenderCakesList} from './RenderCakesList';
import './Cake.css'
import FilterAll from './filterAll/FilterAll'

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
        };
        this.filterChange = this.filterChange.bind(this);
        this.handleToogleChange = this.handleToogleChange.bind(this);
        this.handleFilterAllChange = this.handleFilterAllChange.bind(this);    
        
    }

    componentDidMount() {
        Promise.all([
            fetch('./cakes.json').then(res => res.json()),
            fetch('./cooks.json').then(res => res.json()),
            fetch('./types.json').then(res => res.json()),
        ]).then(data => this.setState({
            cakes: data[0],
            cooks: data[1],
            types: data[2],
            loading: false,
        }))
    }
        
    filterChange (event){
        const value =
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;

        this.setState ({
            [event.target.name] : value,
        });
    } 
        
    handleFilterAllChange (event){
        this.setState({
            filterAll: event.target.value,
        });
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

    handleChangeType = (e) => {
        this.setState({ 
            filterTypesId: e.target.value, 
        })
    }
    
    handleToogleChange(e) { 
        this.setState(prevState => ({
            filterAllToogle:  !prevState.filterAllToogle,
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
            } = this.state;

        const { filterVisibility } = this.props;

        if (!cakeCardOpen && !loading) {
            return <>
                <Container maxWidth = "lg" >
                    {filterVisibility && filterAllToogle && 
                        <CakeFilters 
                            types = {types}
                            filterTypesId = {filterTypesId}
                            filterCakeName = {filterCake}
                            filterCookName = {filterCook}
                            filterLocationCity = {filterLocation}
                            filterAllToogle = {filterAllToogle}
                            checkboxChecked ={filterChecked} 
                            onFilterChange = {this.filterChange}
                            onReset = {this.reset}
                            onCheckedType = {this.handleChangeType}
                            onHandleToogleChange= {this.handleToogleChange}
                        />
                    }
                    {filterVisibility && !filterAllToogle &&
                        <FilterAll
                            filterTypesId ={filterTypesId} 
                            filterAll = {filterAll}
                            filterAllToogle = {filterAllToogle}
                            types = {types}
                            onHandleToogleChange= {this.handleToogleChange}
                            onFilterChange = {this.filterChange}
                            onHandleTypeToggle = {this.handleTypeToggle}
                        />
                    }
                    <RenderCakesList
                        state = {this.state}
                        onCakeCardOpen = {this.openCakeCard}
                    />
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

        if(loading){
            return ( 
               <CircularProgress/>
            )
        }


    }
}
