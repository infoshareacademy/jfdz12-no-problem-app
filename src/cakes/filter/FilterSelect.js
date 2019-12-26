import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, withStyles, } from '@material-ui/core';
import clsx from 'clsx';

const styles = {
    root: {
        '& .MuiSelect-select': {
            backgroundColor: 'white',
        },
        '& .MuiInputBase-root': {  
            borderRadius: '20px',
        },
    },

    formControl: {
      margin: 2,
      minWidth: 120,
      width: '100%',
      borderRadius: '20px',
    },

  };


class FilterSelect extends React.Component{
    constructor(props){
        super(props);
        this.handleSortBy = this.handleSortBy.bind(this);
    }
    
    handleSortBy(event){
        this.props.onHandleSortBy(event);
    }

    render(){
    const {classes} = this.props;
        
        return( <div>
            <FormControl variant="outlined" 
                        className={clsx(classes.root, classes.formControl)}
                        color='secondary'
                        margin='dense'
            >
                <InputLabel id="select-outlined-label">
                    sortowanie
                </InputLabel>
                <Select
                    labelId="selecwt-outlined-label"
                    id="select-outlined"
                    value={this.props.sortById}
                    onChange={this.handleSortBy}
                    labelWidth={70}
                    >
                    <MenuItem value={0}>
                        <em>brak</em>
                    </MenuItem>
                        <MenuItem value={1}>Nazwa ciasta</MenuItem>
                        <MenuItem value={2}>Cena malejąco</MenuItem>
                        <MenuItem value={3}>Cana rosnąco</MenuItem>
                </Select>
            </FormControl>
            
           </div>
        )
    }

}


export default withStyles (styles)(FilterSelect);