import React from 'react';
import CakeFilters from './filter/CakeFilters';
import { CircularProgress, withStyles, Container, Box } from '@material-ui/core';
import CakeCardFull from './CakeCardFull';
import {styles} from './CakeStyles';
import {RenderCakesList} from './RenderCakesList';
import FilterButton from './filter/FilterButton';
import './Cake.css'

class CakesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cakes: [],
            cooks: [],
            types:[],
            filterCake: '', 
            filterCook: '',
            filterChecked: false,
            filterPropVisible: false,
            cakeCardOpen: false,
            CakeCardOpenId: null,
            loading: true,
            filterTypes: [],
            filterTypesId:[],
        };
        this.filterChange = this.filterChange.bind(this);    
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
        this.setState ({
            [event.target.name] : event.target.value,
        });
    } 

    reset = () => this.setState({filterCake: ''});

    resetCook = () => this.setState({filterCook: ''});

    openCakeCard = (id,e) => {
        this.setState({ cakeCardOpen: this.state.cakeCardOpen ? false : true,
                        cakeCardOpenId: id,});
    };

    filterVisibility = () =>{
        this.setState({filterPropVisible : this.state.filterPropVisible === false ? true : false});
    }

    filterCheckboxChange = () => {
        this.setState({filterChecked: this.state.filterChecked ? false : true});
    }

    handleChangeType = (e) => {
        this.setState({ filterTypes: e.target.value,
                        filterTypesId: e.target.value.map( nType => this.state.types.find(typ => typ.name === nType).id)});
       }

    findDataById = (data, id) => data.find((data) => data.id === id) || {};
      
    render(){    
        const {filterTypes, filterTypesId, cakeCardOpen, cakeCardOpenId, cakes, cooks, types, loading, filterCook, filterCake, filterChecked, filterPropVisible} = this.state;
       
        if (!cakeCardOpen && !loading) {
            return <>
                <Container maxWidth = "lg" >
                    <Box>
                        <FilterButton
                            onButtonClick = {this.filterVisibility}
                        />
                    </Box>
                    {filterPropVisible && 
                        <CakeFilters 
                            filterNameValue = {filterCake}
                            filterCookName = {filterCook}
                            checkboxChecked ={filterChecked} 
                            onFilterChange = {this.filterChange}
                            onReset = {this.reset}
                            onResetCook = {this.resetCook}
                            onChecked = {this.filterCheckboxChange}
                            onCheckedType = {this.handleChangeType}
                            types = {types}
                            filterTypes = {filterTypes}
                            filterTypesId = {filterTypesId} 
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
export default withStyles(styles)(CakesList);
      