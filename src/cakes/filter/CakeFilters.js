import React from 'react';
import { TextField, Input, Button, Checkbox, Card, Grid,Box } from '@material-ui/core';
import FilterDropdown from './FilterDropdown'
import FilterCook from './FilterCook';
import FilterButton from './FilterButton';


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
                
                <Card style={{display: this.props.filterPropVisible,
                                zIndex:'99',
                                flexDirection: 'row', 
                                marginLeft: 5, 
                                top: 0,
                                width: '1000px'}}>
                    

                    <TextField 
                            id="filled-basic" 
                            label="wpisz nazwę ciasta" 
                            type="search" 
                            variant="filled"
                            value={this.props.filterNameValue}
                            onChange={this.handleChange}
                            color="secondary"

                        />
                    
                    <Button onClick = {this.reset} > 
                        wyczyść 
                    </Button>
                    
                    <FilterCook
                            onCookChange = {this.handleCookChange}
                            filterCookValue = {this.props.filterCookName}
                            style= {{margin: '10px 2px'}}
                    />
                    <Button onClick = {this.resetCook} > 
                        wyczyść 
                    </Button>
                    
                    <Checkbox label='bezglutenowe' 
                            checked = {this.props.checkboxChecked} 
                            onClick = {this.handleCheckboxChange}
                            style= {{margin: '10px 2px'}}  
                    />
                    
                    <FilterDropdown 
                        onCheckedType = {this.handleChangeType}
                    />
                </Card>
            </Grid>    
        </>
    }
}

export default CakeFilters;