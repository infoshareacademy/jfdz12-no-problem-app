import React from 'react';
import { Menu, withStyles, Divider } from '@material-ui/core';
import {styles} from './FilterAllStyle';
import {RenderGlutenFreeCheckbox} from './RederGlutenFreeCheckbox'
import {RenderTypesMenu} from './RenderTypesMenu';

class RenderFilterAllMenu extends React.Component{
    constructor(props){
        super(props);
        this.handleTypeClose = this.handleTypeClose.bind(this);
        this.handleTypeToggle = this.handleTypeToggle.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleTypeClose () {
        this.props.onHandleTypeClose();
    };

    handleFilterChange(event){
        this.props.onHandleFilterChange(event);
    }

    handleTypeToggle (value){
        this.props.onHandleTypeToggle(value);
    }

    render(){
        const {classes, anchorEl, filterChecked, types, filterTypesId} = this.props;

        return (<>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={this.handleTypeClose}
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
                <RenderGlutenFreeCheckbox
                    filterChecked = {filterChecked}
                    onHandleFilterChange = {this.handleFilterChange}
                />
                <Divider/>
                <RenderTypesMenu 
                    types = {types} 
                    filterTypesId = {filterTypesId}
                    onHandleTypeToggle = {this.handleTypeToggle}
                />

            </Menu>
        </>
        )
    }
    
}

export default withStyles(styles)(RenderFilterAllMenu);