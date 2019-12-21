import React from 'react';
import { MenuItem, Checkbox, ListItemIcon} from '@material-ui/core';

export class RenderGlutenFreeCheckbox extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(event){
        this.props.onHandleFilterChange(event);
    }

    render(){
        
        return (
            <MenuItem >  
                <ListItemIcon onClick={this.handleFilterChange}>
                    <Checkbox
                        name ="filterChecked"
                        edge="start"
                        checked={this.props.filterChecked}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                bezgutenowe
            </MenuItem>
        )
    }
    
}

