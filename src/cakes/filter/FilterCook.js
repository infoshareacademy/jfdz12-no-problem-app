import React from 'react';
import { Input } from 'semantic-ui-react';


class FilterCook extends React.Component{

    handleCookChange = (event) =>{
        this.props.onCookChange(event);
    }
    
    render(){

    return <> 
            <Input icon='search' 
                placeholder='wpisz nazwę cukiernika' 
                value={this.props.filterCookValue}
                onChange={this.handleCookChange}
                style= {{margin: '10px 2px'}} 
            />
        </>
    }
}

export default FilterCook;