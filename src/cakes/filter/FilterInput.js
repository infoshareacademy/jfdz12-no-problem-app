import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { styleFilter } from './FilterStyle';
import SearchIcon from '@material-ui/icons/Search';

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
            <TextField pr={0}
                InputProps={{
                    endAdornment: (
                        <InputAdornment  position="end">
                            <SearchIcon edge="end" />
                        </InputAdornment>
                    ),
                }}
                style = {styleFilter.TextField}    
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



