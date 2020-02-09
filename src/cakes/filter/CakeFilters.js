import React from 'react';
import { Checkbox, Grid, FormControlLabel, Paper, } from '@material-ui/core';
import FilterDropdown from './FilterDropdown';
import FilterInput from './FilterInput';
import { filterStyle } from './FilterStyle';
import { FilterButton } from '../component/FilterButton';
import FilterInputNumber from './FilterInputNumber';
import FilterSelect from './FilterSelect';


class CakeFilters extends React.Component{

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
                            types = {this.props.types}
                            onHandleChangeType = {this.props.onCheckedType}
                        />
                    </Grid>
                    
                    <Grid xs={11} sm item style={cfGrid}>
                        <FilterInput
                            value={this.props.filterCakeName}
                            onChange={this.props.onFilterChange}
                            label = "ciasto"
                            inputName = "filterCake"
                        />
                    </Grid>
                    
                    <Grid xs={11} sm item style={cfGrid}>
                        <FilterInput 
                            value={this.props.filterCookName}
                            onChange={this.props.onFilterChange}
                            label = "cukiernik"
                            inputName = "filterCook"
                        />
                    </Grid>

                    <Grid xs={11} sm item style={cfGrid}>
                        <FilterInput 
                            value={this.props.filterLocationCity}
                            onChange={this.props.onFilterChange}
                            label = "miasto"
                            inputName = "filterLocation"
                        />
                    </Grid>
                    
                    <Grid xs={11} sm item style={cfGrid}>
                        <FormControlLabel
                            control={
                                <Checkbox label='box' 
                                    checked = {this.props.checkboxChecked} 
                                    onClick = {this.props.onFilterChange}
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
                            onChange={ this.props.onHandleChangePrice}
                            label = "od"
                            inputName = "min"
                        />
                        do:
                        <FilterInputNumber
                            value={this.props.priceRange[1]}
                            onChange={ this.props.onHandleChangePrice}
                            label = "do"
                            inputName = "max"
                        />
                    </Grid>

                    <Grid item xs={11} sm style={cfGrid}>
                        <FilterSelect
                            onHandleSortBy = {this.props.onHandleSortBy}
                            sortById = {this.props.sortById}
                        />
                    </Grid>

                    <Grid item xs={11} sm style={cfGrid}>
                        <FilterButton 
                            filterAllToogle = {this.props.filterAllToogle}
                            onHandleToogleChange = {this.props.onHandleToogleChange}
                        />
                    </Grid>
                </Grid>
            </Paper>    
        </>
    }
}

export default CakeFilters;