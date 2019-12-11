import React from 'react';
import CakeFilters from './filter/CakeFilters';
import { CircularProgress, withStyles, Container } from '@material-ui/core';
import CakeCardFull from './CakeCardFull';
import {styles} from './CakeStyles';
import RenderCakesList from './RenderCakesList';

class CakesList extends React.Component{
    state = {
        cakes: [],
        cooks: [],
        types:[],
        filterCake: '', 
        filterCook: '',
        filterChecked: false,
        filterSelected: [],
        filterPropVisible: 'none',
        cakeCardOpen: false,
        CakeCardOpenId: null,
        loading: true,
    };

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
        
    filterCakeChange = (filterCake) => this.setState ({filterCake});

    filterCookChange = (filterCook) => this.setState({filterCook});    

    reset = () => this.setState({filterCake: ''});

    resetCook = () => this.setState({filterCook: ''});

    openCakeCard = (id,e) => {
        this.setState({ cakeCardOpen: this.state.cakeCardOpen ? false : true,
                        cakeCardOpenId: id,});
    };

    filterVisibility = () =>{
        this.setState({filterPropVisible : this.state.filterPropVisible === 'none' ? 'flex' : 'none'});
    }

    filterCheckboxChange = () => {
        this.setState({filterChecked: this.state.filterChecked ? false : true});
    }

    handleChangeType = (e, {value}) => this.setState({ filterSelected: value });

    findDataById = (data, id) => data.find((data) => data.id === id) || {};
      
    render(){    
        const {cakeCardOpen, cakeCardOpenId, cakes, cooks, types, loading, filterCook, filterCake, filterChecked, filterPropVisible} = this.state;

        if (!cakeCardOpen && !loading) {
            return <>
                <Container maxWidth = "lg"  >
                    <CakeFilters 
                        onButtonClick = {this.filterVisibility}
                        filterPropVisible = {filterPropVisible}
                        filterNameValue = {filterCake}
                        filterCookName = {filterCook}
                        checkboxChecked ={filterChecked} 
                        onCakeChange = {this.filterCakeChange}
                        onCookChange = {this.filterCookChange}
                        onReset = {this.reset}
                        onResetCook = {this.resetCook}
                        onChecked = {this.filterCheckboxChange}
                        onCheckedType = {this.handleChangeType}
                    />
                    
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
      