import React from 'react';
import { withStyles, FormControl, InputLabel, Select, MenuItem, Chip } from '@material-ui/core';

const styles = {
  formControl: {
      margin: '0px 10px 10px',
      minWidth: 120,
  },
    
  chips: {
    display: 'flex',
    flexWrap: 'wrap',  
  },
  
  chip: {
    borderRadius: '5px',
    margin: 2,
  },

  noLabel: {
    marginTop: '30px',
  },
}


class FilterDropdown extends React.Component{
    constructor(props){
      super(props);
      this.handleChangeType = this.handleChangeType.bind(this);  
    }

    handleChangeType (event) {
        this.props.onCheckedType (event)
    }
    
    render(){
        const {classes} = this.props;
        const {types, filterTypes} = this.props;

        return <> 
          <FormControl color = 'secondary' margin='dense' className={classes.formControl}>
              <InputLabel >Typ ciasta</InputLabel>
              <Select       
                  multiple
                  color = 'secondary'
                  value={filterTypes}
                  onChange={this.handleChangeType}
                  renderValue={selected => (
                          <div className={classes.chips}>
                            {selected.map(value => (
                              <Chip key={value} 
                                    label={value}  
                                    size = 'small' 
                                    variant ='outlined'
                                    color = 'secondary' 
                                    className={classes.chip}/>
                            ))}
                          </div>
                        )}
                  >
                  {types.map(type => (
                      <MenuItem key={type.id} value={type.name} >
                          {type.name}
                      </MenuItem>
                  ))}
              </Select>
          </FormControl>
        </>
    }
}

export default withStyles(styles)(FilterDropdown);