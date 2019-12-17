import React from 'react';
import { Button, Checkbox, Grid, Box, FormControlLabel } from '@material-ui/core';
import FilterDropdown from './FilterDropdown';
import { FilterInput } from './FilterInput';
import {styleFilter} from './FilterStyle';


class CakeFilters extends React.Component{
    constructor (props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.reset = this.reset.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange (event) {
        this.props.onFilterChange(event);
    }
    
    reset (id) { this.props.onReset(id) };

    handleCheckboxChange (event) {
        this.props.onChecked(event.target.checked)
    }

    handleChangeType (event) {
        this.props.onCheckedType (event)
    }

    filterVisibility () {
        this.props.onButtonClick();
    }

    render(){

        return <> 
            <Grid container spacing={2} justify='center' alignContent='center' maxWidth='lg'>
                
                <Box style = {styleFilter.Box}  >
                                
                    <FilterInput 
                        value={this.props.filterNameValue}
                        onChange={this.handleFilterChange}
                        label = "wpisz nazwę ciasta"
                        inputName = "filterCake"
                     />
                   
                    <Button style = {styleFilter.Button} 
                            onClick = {(id) => this.reset('btn1')} 
                            variant="outlined" 
                            color="secondary" 
                    > 
                        wyczyść 
                    </Button>
                   
                    <FilterInput 
                        value={this.props.filterCookName}
                        onChange={this.handleFilterChange}
                        label = "wpisz nazwę cukiernika"
                        inputName = "filterCook"
                     />
                    
                    <Button style = {styleFilter.Button} onClick = {(id) => this.reset('btn2')} variant="outlined" color="secondary" > 
                        wyczyść 
                    </Button>

                    <FormControlLabel
                        style= {styleFilter.FormControlLabel}
                        control={
                            <Checkbox label='' 
                                    checked = {this.props.checkboxChecked} 
                                    onClick = {this.handleCheckboxChange}
                                    color = 'secondary'
                            />
                        }
                        label="bezglutenowe"
                    />
                    
                    <FilterDropdown 
                        filterTypes = {this.props.filterTypes}
                        types = {this.props.types}
                        onCheckedType = {this.handleChangeType}
                    />
                </Box>
            </Grid>    
        </>
    }
}

//export default withStyles(styles)(CakeFilters);
export default CakeFilters;