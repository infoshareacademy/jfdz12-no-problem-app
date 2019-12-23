import React from 'react';
import clsx from 'clsx';
import { withStyles, FormControl, InputLabel, Select, MenuItem, Chip } from '@material-ui/core';

const styles = {

  root: {
        '& .MuiSelect-select': {
            backgroundColor: 'white',
            borderRadius: '10px',
        },
        '& .MuiSelect-root':{

        },
        '& .MuiInputBase-root': {  
            backgroundColor: '#ffffff',
            border: 'none',
            borderRadius: '20px',
        },
        '& .MuiChip-root':{
            borderRadius: '10px',
        },
        '& .MuiChip-label': {
            paddingLeft: '4px',
            paddingRight: '4px',
        },

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
        margin: '0px 2px',
        fontSize: '10px',
    },
    inputLabel: {
        padding: '0px 5px',
        backgroundColor: 'white',
    }
}


class FilterDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeType = this.handleChangeType.bind(this);
    }

    handleChangeType(event) {
        this.props.onCheckedType(event)
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
            <FormControl color='secondary'
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
        </>
    }
}

export default withStyles(styles)(FilterDropdown);