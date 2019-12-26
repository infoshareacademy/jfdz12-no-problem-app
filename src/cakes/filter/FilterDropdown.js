import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';

import clsx from 'clsx';
import { TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Chip } from '@material-ui/core';

const styles = {

  root: {
        '& .MuiSelect-root': {
            minWidth: '0px',
        },
        '& .MuiSelect-select': {
            // backgroundColor: 'white',
            // borderRadius: '10px',
            // padding: '0px, 0px, 10px'
        },
        '& .MuiInputBase-root': {  
            // backgroundColor: '#ffffff',
            // border: 'none',
            //width: '100%',
            borderRadius: '20px',
        },
        '& .MuiChip-root':{
            // borderRadius: '10px',
        },
        '& .MuiChip-label': {
            // paddingLeft: '4px',
            // paddingRight: '4px',
        },

    },

    formControl: {
        minWidth: '100px',
        maxWidth: '235%',
        flex: '1 1',
    },

    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    chip: {
        margin: '0px 2px',
        fontSize: '10px',
    },
    inputLabel: {
        backgroundColor: 'white',
    }
}


class FilterDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = false;
        this.handleChangeType = this.handleChangeType.bind(this);
    }

    handleChangeType(event,value) {
        this.props.onCheckedType(event,value);
    }

    render() {
        const { classes } = this.props;
        const { types, filterTypesId } = this.props;
        const MenuProps = {
            PaperProps: {
              style: {
                marginTop: 45,
                maxHeight: 300,
                width: 150,
              },
            },
          };

        return <>
            {!this.toggle && (
                <Autocomplete
                    className={clsx(classes.formControl, classes.root)}
                    onChange = {(event,value)=>this.handleChangeType(event,value)}
                    multiple
                    id="size-small-outlined-multi"
                    size="small"
                    options={this.props.types}
                    getOptionLabel={option => option.name}
                    renderInput={params => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Typ ciasta"
                        placeholder="szukaj"
                        color='secondary'
                        fullWidth
                    />
                    )}
                />
            )}


            {this.toggle && ( <FormControl 
                color='secondary'
                margin='dense'
                variant='outlined'
                className={clsx(classes.formControl, classes.root)}
            >
                <InputLabel id="select-label" className={classes.inputLabel} >Typ ciasta</InputLabel>
                <Select
                    multiple
                    labelId='select-label'
                    value={filterTypesId}
                    onChange={this.handleChangeType}
                    MenuProps={MenuProps}

                    renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.map(value => {
                                const type = types.filter(el => el.id === value )[0];
                                return(  
                                <Chip key = {type.id}
                                    label = {type.name}
                                    size = 'small'
                                    variant = 'outlined'
                                    style = {{border: `1px solid ${type.color}`}}
                                    className = {classes.chip} 
                                />
                                )}
                            )}
                        </div>
                    )}
                >
                    {types.map(type => (
                        <MenuItem key={type.id} value={type.id} >
                            {type.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            )}
        </>
    }
}

export default withStyles(styles)(FilterDropdown);