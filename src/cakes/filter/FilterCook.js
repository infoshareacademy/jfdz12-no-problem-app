import React from 'react';
import { Input } from '@material-ui/core';


class FilterCook extends React.Component{

    handleCookChange = (event) =>{
        this.props.onCookChange(event);
    }
    
    render(){

    return <> 
            <Input type='search'
                inputProps={{ 'aria-label': 'search' }} 
                placeholder='wpisz nazwę cukiernika' 
                value={this.props.filterCookValue}
                onChange={this.handleCookChange}
                style= {{margin: '10px 10px'}} 
            />
        </>
    }
}

export default FilterCook;