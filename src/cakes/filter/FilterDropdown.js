import React from 'react';
import clsx from 'clsx';
import { withStyles, FormControl, InputLabel, Select, MenuItem, Chip } from '@material-ui/core';

const styles = {

  root:{
    // '.MuiOutlinedInput-root': {
    //   padding:'6px',
    // },
    // '& .MuiSelect-root':{
    //   backgroundColor: 'red',
    // },
    '& .MuiSelect-select':{
      //marginTop: '10px',
      backgroundColor: 'white',
     // border: '1px solid green',
      borderRadius:'10px',
      // paddingTop: '7px',
      // paddingBottom: '7px',
    },
    // '& FilterDropdown-root':{
    //   borderRadius: '5px',
    //   border: '1px solid yellow',
    // },

    // '& MuiOutlinedInput-root':{
    //   borderRadius: '15px',
    // },

    // '.& MuiFormControl-root':{
    //   borderRadius:'10px',
    // },
    '& .MuiInputBase-root':{ //background dla multiinput 
      backgroundColor: '#ffffff',
      border: 'none',//'1px solid blue' ,
      borderRadius:'20px',
    },
    // '& .Mui-focused':{
    //   backgroundColor: 'gery',
    //   opacity:'1',
    // },
    // '& .MuiMenu-root':{
    //   marginTop: '150px',
    //   backgroundColor: 'orange',
    //   border: '1px solid black',
    // },
    // '& .MuiMenu-paper':{
    //   marginTop: '150px',
    //   backgroundColor: 'grey',
    // },
    // '& .MuiMenu-list':{
    //   backgroundColor: 'yellow',
    // },
    // '& .MuiList-root':{
    //   backgroundColor: 'brown',
    // },
    // '& MuiMenuItem-root':{
    //   backgroundColor: 'lightred',
    // },
   
  },

  formControl: {
    margin: '10px 10px',
    minWidth: 150,
  },
    
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  
  chip: {
    // borderRadius: '5px',
    margin: '0px 2px',
    fontSize: '10px',
  },
  inputLabel:{
    padding: '0px 5px',
    backgroundColor: 'white',
  }

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
                    className={clsx(classes.formControl, classes.root)}
                  
      >
        <InputLabel id = "select-label" className={classes.inputLabel} >Typ ciasta</InputLabel>
        <Select       
            multiple
            labelId = 'select-label'
            //color = 'secondary'
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