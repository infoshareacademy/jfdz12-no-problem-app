import React from 'react';
import {Input  } from 'semantic-ui-react';


class FilterCook extends React.Component{
    state = {
        cooks: []
    }
    
    fetchCooks = () => {fetch ('./cooks.json')
        .then(res => res.json())
        .then(res => this.setState({ 
            cooks: res.map((cook) =>{
                return {
                    key: cook.id,
                    text: cook.name,
                    value: cook.id
                }})
        }))
    }

    componentDidMount() {
        this.fetchCooks();
    }

    handleCookChange = (event) =>{
        this.props.onCookChange(event);
        console.log(event);
    }
    
    render(){
        const {cooks} = this.state;

        return <> 
            <Input icon='search' 
                        placeholder='wpisz nazwę cukiernika' 
                        value={this.props.filterCookValue}
                        onChange={this.handleCookChange} 
                />
           
            
        </>
    }
}

export default FilterCook;