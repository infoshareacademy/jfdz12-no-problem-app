import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

const styles = {
    root: {
        '& .MuiOutlinedInput-root':{
            borderRadius: '20px',
            margin: '0px',
            minWidth: '100px',
            width: '100%',
        },
        '& .MuiIconButton-root': {
            padding: '6px',
        },
    },
  };

class FilterInputValue extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event){
        this.props.onChange(event);
    }

    render(){
        const { classes } = this.props;
        
        return (
            <TextField 
                className={classes.root}
                name = {this.props.inputName} 
                placeholder = {this.props.label} 
                type = "number"
                variant = "outlined"
                value = {this.props.value}
                onChange = {this.handleChange}
                color = 'secondary'
                size = 'small'
            />
        )
    }
}

export default withStyles(styles)(FilterInputValue); 

