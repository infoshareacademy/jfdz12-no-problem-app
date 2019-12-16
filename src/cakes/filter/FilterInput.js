import React from 'react';
import { TextField } from '@material-ui/core';


export class FilterInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event){
        this.props.onChange(event);
    }

    render(){
        return (
            <TextField
                className = 'cakesFilter-textField'    
                name = {this.props.inputName} 
                label = {this.props.label} 
                type = "search"
                variant = "outlined"
                value = {this.props.value}
                onChange = {this.handleChange}
                color = 'secondary'
                size = 'small'
                
            />
        )

    }
    

}



