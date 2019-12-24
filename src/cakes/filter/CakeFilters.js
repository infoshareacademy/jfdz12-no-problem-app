import React from 'react';
import { Checkbox, Grid, FormControlLabel, Paper } from '@material-ui/core';
import FilterDropdown from './FilterDropdown';
import FilterInput from './FilterInput';
import {filterStyle} from './FilterStyle';
import {FilterButton} from '../FilterButton';


class CakeFilters extends React.Component{
    constructor (props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.reset = this.reset.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleToogleChange = this.handleToogleChange.bind(this);
    }

    handleFilterChange (event) {
        this.props.onFilterChange(event);
    }

    reset (id) { 
        this.props.onReset(id) 
    };

    handleCheckboxChange (event) {
        this.props.onChecked(event.target.checked)
     }

    handleChangeType (event) {
        this.props.onCheckedType (event)
    }

    filterVisibility () {
        this.props.onButtonClick();
    }

    handleToogleChange (){
        this.props.onHandleToogleChange();
    }

    render(){

        return <> 
            <Paper style={filterStyle.cfPaper}>
                <Grid container 
                    spacing={1}
                    justify='space-evenly' 
                    alignContent='center' 
                    alignItems='center'
                    style = {filterStyle.Grid}
                >
                    <Grid xs={11} sm item>
                        <FilterInput
                            value={this.props.filterCakeName}
                            onChange={this.handleFilterChange}
                            onClick = {this.reset}
                            label = "szukaj ciasto"
                            inputName = "filterCake"
                        />
                    </Grid>
                    
                    <Grid xs={11} sm  item>
                        <FilterInput 
                            value={this.props.filterCookName}
                            onChange={this.handleFilterChange}
                            label = "szukaj cukiernika"
                            inputName = "filterCook"
                            onClick = {this.reset}
                            />
                    </Grid>

                    <Grid xs={11} sm item>
                        <FilterInput 
                            value={this.props.filterLocationCity}
                            onChange={this.handleFilterChange}
                            label = "szukaj miasta"
                            inputName = "filterLocation"
                            onClick = {this.reset}
                            />
                    </Grid>
                    
                    <Grid xs={11} sm item >
                        <FormControlLabel
                            style= {{margin: '0px', padding:"5px"}}
                            control={
                                <Checkbox label='bex' 
                                checked = {this.props.checkboxChecked} 
                                onClick = {this.handleFilterChange}
                                color = 'secondary'
                                name = 'filterChecked'
                                />
                            }
                            label="bezglutenowe"
                            />
                    </Grid>
                    
                    <Grid item xs={11} sm  >
                        <FilterDropdown 
                            filterTypesId = {this.props.filterTypesId}
                            types = {this.props.types}
                            onCheckedType = {this.handleChangeType}
                        />
                    </Grid>
                    
                    <Grid item xs={11} sm >
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

//export default withStyles(styles)(CakeFilters);
export default CakeFilters;