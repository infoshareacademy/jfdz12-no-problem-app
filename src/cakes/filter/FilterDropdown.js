import React from 'react';
import { withStyles, FormControl, InputLabel, Select, MenuItem, Chip } from '@material-ui/core';

const styles = {
    formControl: {
      margin: '3px',
      minWidth: 120,
      maxWidth: 200,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: '3px',
    },
  }


class FilterDropdown extends React.Component{
    
    handleChangeType = (event) =>{
        this.props.onCheckedType (event)
    }
    
    render(){
        const {classes} = this.props;
        const {types, filterTypes} = this.props;

        return <> 
                
                <FormControl className={classes.formControl}>
                    <InputLabel >Typ ciasta</InputLabel>
                    <Select
                       
                        multiple
                        value={filterTypes}
                        onChange={this.handleChangeType}
                        renderValue={selected => (
                                <div className={classes.chips}>
                                  {selected.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
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

// <Dropdown   
//                         placeholder='kategorie' 
//                         fluid
//                         multiple 
//                         selection   
//                         options = {types}
//                         onChange = {this.handleChangeType} 
//                         style= {{margin: '10px 2px', width: '200px'}}
//             />\


// <FormControl className={classes.formControl}>
// <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
// <Select
//   labelId="demo-mutiple-chip-label"
//   id="demo-mutiple-chip"
//   multiple
//   value={types}
//   onChange={this.handleChangeType}
//   input={<Input id="select-multiple-chip" />}
//   renderValue={selected => (
//     <div className={classes.chips}>
//       {selected.map(value => (
//         <Chip key={value} label={value} className={classes.chip} />
//       ))}
//     </div>
//   )}
  
// >
//   {names.map(name => (
//     <MenuItem key={name} value={name} >
//       {name}
//     </MenuItem>
//   ))}
// </Select>
// </FormControl>

// <FormControl className={classes.formControl}>
//                     <InputLabel htmlFor="age-native-simple">Typy</InputLabel>
//                     <Select
//                     native
//                     value={this.props.tid}
//                     onChange={this.handleChangeType}
//                     >
//                     <option value="" />
//                     <option value={1}>Ten</option>
//                     <option value={2}>Twenty</option>
//                     <option value={3}>Thirty</option>
//                     </Select>
//                 </FormControl>


// state = {
//     types: []
// }

// fetchType = () => {fetch ('./types.json')
//     .then(res => res.json())
//     .then(res => this.setState({ 
//         types: res.map((type) =>{
//             return {
//                 key: type.name,
//                 text: type.name,
//                 value: type.id,
//                 color: type.color
//             }})
//     }))
// }

// componentDidMount() {
//     this.fetchType();
// }

































