import React from 'react';
import { TextField, Button, Checkbox, Grid, Box, FormControlLabel } from '@material-ui/core';
import FilterDropdown from './FilterDropdown'
import FilterCook from './FilterCook';
import FilterButton from './FilterButton';
import SearchIcon from '@material-ui/icons/Search';

class CakeFilters extends React.Component{

    handleChange = (event) => {
        this.props.onCakeChange(event.target.value);
      }
    
    handleCookChange = (event) =>{
        this.props.onCookChange(event.target.value);
    }
    
    reset = () => this.props.onReset();

    resetCook = () => this.props.onResetCook();

    handleCheckboxChange = (event) =>{
        this.props.onChecked(event.target.checked)
    }

    handleChangeType = (event, data) =>{
        this.props.onCheckedType (event, data)
    }

    filterVisibility = () =>{
        this.props.onButtonClick();
    }


    render(){
        return <> 
            <Grid style={{display: 'flex', flexDirection:'row'}}>
                <Box>
                    <FilterButton
                        onButtonClick = {this.filterVisibility}
                    />
                </Box>
                
                <Box style={{display: this.props.filterPropVisible,
                                zIndex:'99',
                                flexDirection: 'row', 
                                marginLeft: 5, 
                                top: 0,
                                width: '1000px'}}>
                 <form noValidate autoComplete="off">   
                    <TextField 
                            label=" wpisz nazwę ciasta" 
                             
                            variant="filled"
                            value={this.props.filterNameValue}
                            onChange={this.handleChange}
                            
                            style={{margin:'2px 10px'}}
                     />
          
                    <Button onClick = {this.reset } variant="outlined" color="secondary" size="large"> 
                        wyczyść 
                    </Button>
                   
                    <FilterCook
                            onCookChange = {this.handleCookChange}
                            filterCookValue = {this.props.filterCookName}
                            style= {{margin: '10px 2px'}}
                    />
                    <Button onClick = {this.resetCook} variant="outlined" color="secondary" size="large"> 
                        wyczyść 
                    </Button>
                    <FormControlLabel
                        style= {{margin: '10px 2px'}}
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
                        onCheckedType = {this.handleChangeType}
                    />
                    </form>
                </Box>
            </Grid>    
        </>
    }
}

export default CakeFilters;