import React from 'react';
import {Segment, Dropdown } from 'semantic-ui-react';


class FilterDropdown extends React.Component{
    state = {
        types: []
    }
    
    fetchType = () => {fetch ('./types.json')
        .then(res => res.json())
        .then(res => this.setState({ 
            types: res.map((type) =>{
                return {
                    key: type.name,
                    text: type.name,
                    value: type.id,
                    color: type.color
                }})
        }))
    }

    componentDidMount() {
        this.fetchType();
    }

    handleChangeType = (event, data) =>{
        this.props.onCheckedType (event, data)
    }
    
    render(){
        const {types} = this.state;

        return <> 
            <Segment style = {{width: '300px' , margin: 'auto'}}>
                <Dropdown placeholder='kategorie' 
                            fluid
                            multiple 
                            selection  
                            options = {types}
                            onChange = {this.handleChangeType} />
           
            </Segment>
           
        </>
    }
}

export default FilterDropdown;