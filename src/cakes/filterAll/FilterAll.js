import React from 'react';
import { Button, Grid, withStyles, IconButton, InputBase,Paper, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RenderFilterAllMenu from './RenderFilterAllMenu'
import {styles} from './FilterAllStyle';

class FilterAll extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            anchorEl: null,
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleTypeClick = this.handleTypeClick.bind(this);
        this.handleTypeClose = this.handleTypeClose.bind(this);
        this.handleTypeToggle = this.handleTypeToggle.bind(this);
    }

    handleFilterChange (event) {
        this.props.onFilterChange(event);
    };

    handleTypeClick (event) {
        this.setState({anchorEl: event.currentTarget});
    };

    handleTypeClose () {
        this.setState({anchorEl: null});
    };

    handleTypeToggle (value){
        this.props.onHandleTypeToggle(value);
    }

    render(){
        const { classes, filterChecked, types, filterTypesId } = this.props;
        const { anchorEl } = this.state;
        
        return (<>
            <Grid   container 
                    spacing={2} 
                    justify='center' 
                    alignContent='center' 
                    className = {classes.grid}
            >
                <Paper component="form" className={classes.PaperStyle}>
                    <Grid container direction='column' justify='center' alignContent='center' >
                        <Grid container>
                            <IconButton className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                onChange={this.handleFilterChange}
                                value={this.props.filterAll}
                                className={classes.input}
                                placeholder="ciasto cukiernik lokalizacja ..."
                                name = "filterAll" 
                            />
                        
                            <Divider className={classes.divider} orientation="vertical" />

                            <Button color="primary" 
                                    className={classes.iconButton}
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    onClick={this.handleTypeClick}
                            >
                                Kategorie
                            </Button>
                            <RenderFilterAllMenu
                                anchorEl = {anchorEl}
                                filterChecked = {filterChecked}
                                types = {types} 
                                filterTypesId = {filterTypesId}
                                onHandleTypeClose = {this.handleTypeClose}
                                onHandleFilterChange = {this.handleFilterChange}
                                onHandleTypeToggle = {this.handleTypeToggle}
                            />   
                            
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </>)
    }
} 

export default  withStyles(styles)(FilterAll);

