import React from 'react';
import { Checkbox, Grid, FormControlLabel, Paper, } from '@material-ui/core';
import FilterDropdown from './FilterDropdown';
import FilterInput from './FilterInput';
import {filterStyle} from './FilterStyle';
import {FilterButton} from '../FilterButton';
import FilterInputNumber from './FilterInputNumber';
import FilterSelect from './FilterSelect';


class CakeFilters extends React.Component{
    constructor (props){
        super(props);
       
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.reset = this.reset.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleToogleChange = this.handleToogleChange.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSortBy = this.handleSortBy.bind(this);
    }

    handleFilterChange (event) {
        this.props.onFilterChange(event);
    }

    reset (id) { 
        this.props.onReset(id) 
    };

    handleCheckboxChange (event) {
        this.props.onChecked(event.target.checked);
     }

    handleChangeType (event,value) {
        this.props.onCheckedType (event,value);
    }

    filterVisibility () {
        this.props.onButtonClick();
    }

    handleToogleChange (){
        this.props.onHandleToogleChange();
    }

    handleChangePrice(event, newValue){
        this.props.onHandleChangePrice(event, newValue);
    }

    handleSortBy(event){
        this.props.onHandleSortBy(event);
    }

    render(){
        const {cfPaper, cfGrid} = filterStyle;
        
        return <> 
            <Paper style={cfPaper}>
                <Grid container 
                    direction='column'
                    justify='space-evenly' 
                    alignContent = 'center' 
                    alignItems = 'center'
                    style = {filterStyle.Grid}
                >
                    <Grid item xs={11} sm style={cfGrid} >
                        <FilterDropdown 
                            filterTypesId = {this.props.filterTypesId}
                            filterTypesId2 = {this.props.filterTypesId2}
                            types = {this.props.types}
                            onCheckedType = {this.handleChangeType}
                        />
                    </Grid>
                    
                    <Grid xs={11} sm item style={cfGrid}>
                        <FilterInput
                            value={this.props.filterCakeName}
                            onChange={this.handleFilterChange}
                            onClick = {this.reset}
                            label = "ciasto"
                            inputName = "filterCake"
                        />
                    </Grid>
                    
                    <Grid xs={11} sm item style={cfGrid}>
                        <FilterInput 
                            value={this.props.filterCookName}
                            onChange={this.handleFilterChange}
                            label = "cukiernik"
                            inputName = "filterCook"
                            onClick = {this.reset}
                            />
                    </Grid>

                    <Grid xs={11} sm item style={cfGrid}>
                        <FilterInput 
                            value={this.props.filterLocationCity}
                            onChange={this.handleFilterChange}
                            label = "miasto"
                            inputName = "filterLocation"
                            onClick = {this.reset}
                            />
                    </Grid>
                    
                    <Grid xs={11} sm item style={cfGrid}>
                        <FormControlLabel
                            control={
                                <Checkbox label='box' 
                                    checked = {this.props.checkboxChecked} 
                                    onClick = {this.handleFilterChange}
                                    color = 'secondary'
                                    name = 'filterChecked'
                                />
                            }
                            label="bezglutenowe"
                            />
                    </Grid>
                    
                    <Grid item xs={11} sm style={cfGrid}>
                        Cena od:
                        <FilterInputNumber
                            value={this.props.priceRange[0]}
                            onChange={this.handleChangePrice}
                            label = "od"
                            inputName = "min"
                        />
                        do:
                        <FilterInputNumber
                            value={this.props.priceRange[1]}
                            onChange={this.handleChangePrice}
                            label = "do"
                            inputName = "max"
                        />
                    </Grid>

                    <Grid item xs={11} sm style={cfGrid}>
                        <FilterSelect
                            onHandleSortBy = {this.handleSortBy}
                            sortById = {this.props.sortById}
                        />
                    </Grid>

                    <Grid item xs={11} sm style={cfGrid}>
                        <FilterButton 
                            filterAllToogle = {this.props.filterAllToogle}
                            onHandleToogleChange = {this.handleToogleChange}
                        />
                    </Grid>
                </Grid>
            </Paper>    
        </>
    }
}

export default CakeFilters;