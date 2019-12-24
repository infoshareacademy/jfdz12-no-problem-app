import React from 'react';
import clsx from 'clsx';
import { withStyles, FormControl, InputLabel, Select, MenuItem, Chip } from '@material-ui/core';

const styles = {

  root: {
        '& .MuiSelect-root': {
            // paddingBottom: '10px',
            // marginBottom:'1px',
            //paddingTop: '0px',
            minWidth: '0px',
        },
        '& .MuiSelect-select': {
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '0px, 0px, 10px'
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
        minWidth: 160,
        //marginBottom: '1px',
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
            <FormControl 
                color='secondary'
                margin='dense'
                variant='outlined'
                className={clsx(classes.formControl, classes.root)}
            >
                <InputLabel id="select-label" className={classes.inputLabel} >Typ</InputLabel>
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