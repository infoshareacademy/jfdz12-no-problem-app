import React from 'react';
import { Button, Grid, withStyles, IconButton, InputBase,Paper, Divider, Hidden } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RenderFilterAllMenu from './RenderFilterAllMenu'
import { styles } from './FilterAllStyle';
import { FilterButton } from '../component/FilterButton';
import ToogleView from '../component/ToogleView';

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
        this.handleToogleChange = this.handleToogleChange.bind(this);
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

    handleToogleChange (){
        this.props.onHandleToogleChange();
    }

    render(){
        const { classes, filterChecked, types, filterTypesId, toogleView } = this.props;
        const { anchorEl } = this.state;
        
        return (<>
            <Grid   container 
                    justify='center' 
                    alignContent='center' 
                    className = {classes.grid}
                    style={{padding: '0px 5px'}}
            >
                <Paper component="form" className={classes.PaperStyle}>
                    <Grid container wrap='wrap' direction='row' justify='space-between' alignContent='center' >
                        <Grid item xs={12} sm  container className={classes.gridSearch}>
                            <IconButton className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <Grid item xs ={10}>
                            <InputBase 
                                onChange={this.handleFilterChange}
                                value={this.props.filterAll}
                                className={classes.input}
                                placeholder="ciasto, cukiernik, lokalizacja ..."
                                name = "filterAll" 
                            />
                            </Grid> 
                        </Grid>
                        
                        <Hidden only='xs'>
                            <Divider className={classes.divider} orientation="vertical" />
                        </Hidden>
                        
                        <Hidden smUp ><Divider variant= 'middle' width='90%' /> </Hidden>

                        <Grid item xs={12} sm={4} container justify='space-evenly' wrap='nowrap'>  
                            <Grid item >
                                <Button color="primary" 
                                        className={classes.iconButton}
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={this.handleTypeClick}
                                        size = 'medium'
                                >
                                    Typ
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
                            <Divider className={classes.divider} orientation="vertical" />       
                            <Grid item>
                                <FilterButton 
                                    filterAllToogle = {this.props.filterAllToogle}
                                    onHandleToogleChange = {this.handleToogleChange}
                                />
                            </Grid>
                            <Divider className={classes.divider} orientation="vertical" />
                            <Grid item>
                                <ToogleView 
                                    onHandleToogleView = {this.props.onHandleToogleView} 
                                    toogleView = {toogleView}
                                />   
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                

            </Grid>
        </>)
    }
} 

export default  withStyles(styles)(FilterAll);