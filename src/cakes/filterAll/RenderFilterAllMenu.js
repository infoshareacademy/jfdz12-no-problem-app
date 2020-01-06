import React from 'react';
import { Menu, withStyles, Divider } from '@material-ui/core';
import {styles} from './FilterAllStyle';
import {RenderTypesMenu} from './RenderTypesMenu';

function RenderFilterAllMenu (props) {
    const {classes, anchorEl, filterChecked, types, filterTypesId} = props;
    
    return (<div>
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={props.onHandleTypeClose}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            className ={classes.root}
        >            
            <Divider/>
            <RenderTypesMenu 
                types = {types} 
                filterTypesId = {filterTypesId}
                onHandleTypeToggle = {props.onHandleTypeToggle}
                filterChecked = {filterChecked}
                onHandleFilterChange = {props.onHandleFilterChange}
            />

        </Menu>
    </div>
    )
}

export default withStyles(styles)(RenderFilterAllMenu);


// class RenderFilterAllMenu extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleTypeClose = this.handleTypeClose.bind(this);
//         this.handleTypeToggle = this.handleTypeToggle.bind(this);
//         this.handleFilterChange = this.handleFilterChange.bind(this);
//     }

//     handleTypeClose () {
//         this.props.onHandleTypeClose();
//     };

//     handleFilterChange(event){
//         this.props.onHandleFilterChange(event);
//     }

//     handleTypeToggle (value){
//         this.props.onHandleTypeToggle(value);
//     }

//     render(){
//         const {classes, anchorEl, filterChecked, types, filterTypesId} = this.props;

//         return (<>
//             <Menu
//                 id="long-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={this.handleTypeClose}
//                 getContentAnchorEl={null}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'center',
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'center',
//                 }}
//                 className ={classes.root}
//             >
//                 <RenderGlutenFreeCheckbox
//                     filterChecked = {filterChecked}
//                     onHandleFilterChange = {this.handleFilterChange}
//                 />
//                 <Divider/>
//                 <RenderTypesMenu 
//                     types = {types} 
//                     filterTypesId = {filterTypesId}
//                     onHandleTypeToggle = {this.handleTypeToggle}
//                 />

//             </Menu>
//         </>
//         )
//     }
    
// }

// export default withStyles(styles)(RenderFilterAllMenu);
