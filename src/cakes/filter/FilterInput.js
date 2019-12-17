import React from 'react';
import { TextField, InputAdornment, IconButton, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

const styles = {
    root: {
        '& .MuiOutlinedInput-root':{
            borderRadius: '20px',
            margin: '5px',
            minWidth: '250px',
        },
        '& .MuiIconButton-root': {
            padding: '6px',
        },
    },
  };

class FilterInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event){
        this.props.onChange(event);
    }

    reset (id) {
        this.props.onClick(id);
    }

    renderResetIcon(){
        const startAdormentObj = {
            startAdornment: (
                <InputAdornment  position="start">
                    <SearchIcon edge="start" />
                </InputAdornment>
            ),
        };

        const endAdormentObj = {
            endAdornment: (
                <IconButton onClick = {(id) => this.reset(this.props.inputName)} 
                            color="secondary" aria-label="reset">
                    <HighlightOffRoundedIcon />
                </IconButton>
            ),
        };

        return (this.props.value.length >0  
                ?   {...startAdormentObj, ...endAdormentObj}    
                :   {...startAdormentObj});

    }

    render(){
        const { classes } = this.props;
        
        return (
            <TextField 
                className={classes.root}
                
                InputProps = {this.renderResetIcon()}
                name = {this.props.inputName} 
                placeholder = {this.props.label} 
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

export default withStyles(styles)(FilterInput); 
