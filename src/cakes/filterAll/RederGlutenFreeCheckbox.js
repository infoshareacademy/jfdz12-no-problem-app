import React from 'react';
import { MenuItem, Checkbox, ListItemIcon, FormControlLabel} from '@material-ui/core';

export function RenderGlutenFreeCheckbox (props) {
    return (
        <MenuItem >
            <FormControlLabel  style = {{margin: '0px',}}
                control = {<ListItemIcon >
                    <Checkbox
                        onClick={props.onHandleFilterChange}
                        name ="filterChecked"
                        edge="start"
                        checked={props.filterChecked}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>}
                label = "bezgutenowe"
            />
        </MenuItem>
    )
}
    

// export class RenderGlutenFreeCheckbox extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleFilterChange = this.handleFilterChange.bind(this);
//     }

//     handleFilterChange(event){
//         this.props.onHandleFilterChange(event);
//     }

//     render(){
        
//         return (
//             <MenuItem >
//                 <FormControlLabel  style = {{margin: '0px',}}
//                     control = {<ListItemIcon >
//                         <Checkbox
//                             onClick={this.handleFilterChange}
//                             name ="filterChecked"
//                             edge="start"
//                             checked={this.props.filterChecked}
//                             tabIndex={-1}
//                             disableRipple
//                         />
//                     </ListItemIcon>}
//                     label = "bezgutenowe"
//                 />
//             </MenuItem>
//         )
//     }
    
// }
