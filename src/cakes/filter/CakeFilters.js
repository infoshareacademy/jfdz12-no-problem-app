import React from 'react';
import { withStyles, TextField, Button, Checkbox, Grid, Box, FormControlLabel, Paper } from '@material-ui/core';
import FilterDropdown from './FilterDropdown'
import FilterCook from './FilterCook';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    root: {
        '& .MuiTextField-root': {
          margin: '5px', 
          width: 200,
        },
        '& .MuiButton-root':{
            margin: '5px',
            pading: '4px'
        },	
        
    button: {
        margin: '2', 
        width: 100,
        height: 20,
        },
    }    
  
}

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

    handleChangeType = (event) =>{
        this.props.onCheckedType (event)
    }

    filterVisibility = () =>{
        this.props.onButtonClick();
    }


    render(){
        const { classes } = this.props;

        return <> 
            <Grid >
                
                <Box className={classes.root}  
                    style={{visibility: this.props.filterPropVisible, 
                            position: 'realtive',
                            display: 'flex',
                            zIndex:'99',
                            flexDirection: 'row',
                            flexWrap: 'wrap', 
                            alignItems:'center',
                            justifyContent: 'center',
                            maxWidth: '1200px'}}
                            >
                
                    <TextField 
                            label=" wpisz nazwę ciasta" 
                            type="search"
                            variant="outlined"
                            value={this.props.filterNameValue}
                            onChange={this.handleChange}
                            color = 'secondary'
                            size='small'
                     />
                   
                    <Button onClick = {this.reset }  
                        variant="outlined" 
                        color="secondary" 
                    > 
                        wyczyść 
                    </Button>
                   
                    <TextField 
                            label="wpisz nazwę cukiernika" 
                            type="search"
                            variant="outlined"
                            value={this.props.filterCookName}
                            onChange={this.handleCookChange}
                            color = 'secondary'
                            size='small'
                     />
                    
                    <Button onClick = {this.resetCook} variant="outlined" color="secondary" > 
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
                        filterTypes = {this.props.filterTypes}
                        types = {this.props.types}
                        onCheckedType = {this.handleChangeType}
                    />
                </Box>
            </Grid>    
        </>
    }
}

export default withStyles(styles)(CakeFilters);

// <FilterCook
//                             onCookChange = {this.handleCookChange}
//                             filterCookValue = {this.props.filterCookName}
//                             style= {{margin: '10px 2px'}}
//                     />