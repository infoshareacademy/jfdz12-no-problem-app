import React from 'react';
import { withStyles, FormControl, InputLabel, Select, MenuItem, Chip } from '@material-ui/core';

const styles = {

  root:{
    '& .MuiMenu-root':{
      marginTop: '150px',
      backgroundColor: 'red',
      border: '1px solid black',
    },
    '& .MuiMenu-paper':{
      marginTop: '150px',
      backgroundColor: 'red',
    },
    '& .MuiMenu-list':{
      backgroundColor: 'red',
    },
    '& .MuiList-root':{
      backgroundColor: 'red',
    },
    '& MuiMenuItem-root':{
      backgroundColor: 'red',
    },
    // '& .MuiSelect-select':{
    //   // marginTop: '150px',
    //   backgroundColor: 'red',
    //   border: '1px solid black',
    // }
  },

  formControl: {
      margin: '10px 10px',
      minWidth: 120,
      backgroundColor: 'white'
  },
    
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  
  chip: {
    borderRadius: '5px',
    // margin: ,
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
      <FormControl  color = 'secondary' 
                    margin='dense' 
                    variant='outlined' 
                    className={classes.formControl}
                    classes={{ root: classes.root}}
      >
        <InputLabel style={{backgroundColor: 'white'}} id = "select-label" >Typ ciasta</InputLabel>
        <Select       
            multiple
            labelId = 'select-label'
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