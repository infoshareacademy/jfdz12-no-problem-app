import React from 'react';
import { MenuItem, Checkbox, ListItemIcon } from '@material-ui/core';

export class RenderTypesMenu extends React.Component{
    constructor(props){
        super(props);
        this.handleTypeToggle = this.handleTypeToggle.bind(this);
    }

    handleTypeToggle (value){
        this.props.onHandleTypeToggle(value);
    }

    render(){
        const {types, filterTypesId} = this.props;

        const sortTypes = types.map((el)=> ({
                ...el,
                checked: filterTypesId.indexOf(el.id) > -1 ? true : false ,
            })).sort( (a,b) => b.checked - a.checked);

        return (<>
            {sortTypes.map(type => (
                <MenuItem key={type.id} onClick={() => this.handleTypeToggle(type.id)}>
                    <ListItemIcon  >
                        <Checkbox style = {{color: type.color}}
                            edge="start"
                            checked = {type.checked}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <div >{type.name}</div>
                </MenuItem>
                ))
            }   
        </>
        )
    }
    
}
