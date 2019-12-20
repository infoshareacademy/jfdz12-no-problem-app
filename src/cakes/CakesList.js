import React from 'react';
import CakeFilters from './filter/CakeFilters';
import { CircularProgress, Container, Box } from '@material-ui/core';
import CakeCardFull from './CakeCardFull';
import {RenderCakesList} from './RenderCakesList';
import FilterButton from './filter/FilterButton';
import './Cake.css'
import { FilterAllToogle } from './filterNew/FilterAllToogle';
import FilterAll from './filterNew/FilterAll'

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
            filterPropVisible: false,
            cakeCardOpen: false,
            CakeCardOpenId: null,
            loading: true,
            filterTypes: [],
            filterTypesId:[],
            filterAllToogle: true,
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
            cakesAndCooks: data[0].map((cake) => {
                const cookData =  this.findDataById(data[1], cake.cookId);
                return {
                    id: cake.id,
                    name: `${cake.name} ${cookData.name} ${cookData.surname}`,
                }
            }),
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

    reset = (id) => this.setState({[id]: ''});

    openCakeCard = (id,e) => {
        this.setState({ cakeCardOpen: this.state.cakeCardOpen ? false : true,
                        cakeCardOpenId: id,});
    };

    filterVisibility = () =>{
        this.setState({filterPropVisible : this.state.filterPropVisible === false ? true : false});
    }

    handleChangeType = (e) => {
        this.setState({ filterTypes: e.target.value,
                        filterTypesId: e.target.value.map( nType => this.state.types.find(typ => typ.name === nType).id)});
       }

    handleToogleChange(e) { 

        this.setState(prevState => ({
            filterAllToogle:  !prevState.filterAllToogle,
        })) 
    }

    findDataById = (data, id) => data.find((data) => data.id === id) || {};
      
    render(){    
        const {filterTypes, 
                filterTypesId, 
                cakeCardOpen, 
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
                filterPropVisible, 
                filterAllToogle,
                cakesAndCooks} = this.state;
            console.log(filterAll)

        if (!cakeCardOpen && !loading) {
            return <>
                <Container maxWidth = "lg" >
                    <Box>
                        <FilterButton
                            onButtonClick = {this.filterVisibility}
                        />
                    </Box>
                    <Box>
                        <FilterAllToogle
                            filterAllToogle = {filterAllToogle}
                            onHandleToogleChange = {this.handleToogleChange}
                        />
                    </Box>
                    {filterPropVisible && filterAllToogle && 
                        <CakeFilters 
                            types = {types}
                            filterTypes = {filterTypes}
                            filterTypesId = {filterTypesId} 
                            filterCakeName = {filterCake}
                            filterCookName = {filterCook}
                            filterLocationCity = {filterLocation}
                            checkboxChecked ={filterChecked} 
                            onFilterChange = {this.filterChange}
                            onReset = {this.reset}
                            onCheckedType = {this.handleChangeType}
                        />
                    }
                    {filterPropVisible && !filterAllToogle &&
                        <FilterAll
                            filterAll = {filterAll}
                            onHandleFilterAllChange = {this.handleFilterAllChange}
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
