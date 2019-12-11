import React from 'react'
import CakeCard from './CakeCard';
import CakeFilters from './filter/CakeFilters'
import { Container, Grid, Paper, CircularProgress, withStyles } from '@material-ui/core'
import filterCondition from './filter/FilterCondition'
import FilterButton from './filter/FilterButton'
import CakeCardFull from './CakeCardFull';
import {styles} from './CakeStyles';

class CakesList extends React.Component{
    state = {
        cakes: [],
        cooks: [],
        types:[],
        filterCake: '', 
        filterCook: '',
        filterChecked: false,
        filterSelected: [],
        filterProp: {
            visible: 'hidden',
            arrow: 'angle double right'
        },
        cakeCardOpen: false,
        CakeCardOpenId: null,
        loading: true,
    };

    componentDidMount() {
        Promise.all([
            fetch('./cakes.json').then(res => res.json()),
            fetch('./cooks.json').then(res => res.json()),
            fetch('./types.json').then(res => res.json()),
        ]).then(data => this.setState({
            cakes: data[0],
            cooks: data[1],
            types: data[2],
            loading: false,
        }))
    }
        
    filterCakeChange = (filterCake) => this.setState ({filterCake});

    filterCookChange = (filterCook) => this.setState({filterCook});    

    reset = () => this.setState({filterCake: ''});

    resetCook = () => this.setState({filterCook: ''});

    openCakeCard = (id,e) => {
        this.setState({ cakeCardOpen: this.state.cakeCardOpen ? false : true,
                        cakeCardOpenId: id,});
    };

    filterVisibility = () =>{
        this.setState({filterProp :{
            visible : this.state.filterProp.visible === 'hidden' ? 'visible' : 'hidden',
            arrow: this.state.filterProp.visible === 'hidden' ? 'angle double left' : 'angle double right'
        }});
    }

    filterCheckboxChange = () => {
        this.setState({filterChecked: this.state.filterChecked ? false : true});
    }

    handleChangeType = (e, {value}) => this.setState({ filterSelected: value });

    findDataById = (data, id) => data.find((data) => data.id === id) || {};

    renderFilterButton = () => {
        return (
            <FilterButton
                onButtonClick = {this.filterVisibility}
                iconName = {this.state.filterProp.arrow}
            />
        )
    }

    renderFilterForm = () =>{
        const { filterCook, filterCake, filterChecked, filterProp } = this.state;
        
        return(
            <CakeFilters 
                filterNameValue = {filterCake}
                filterCookName = {filterCook}
                checkboxChecked ={filterChecked} 
                onCakeChange = {this.filterCakeChange}
                onCookChange = {this.filterCookChange}
                onReset = {this.reset}
                onResetCook = {this.resetCook}
                onChecked = {this.filterCheckboxChange}
                onCheckedType = {this.handleChangeType}
                filterPropVisible = {filterProp.visible}
            />
        )
    }

    renderCakeList = () =>{
        const { cakes, cooks, types, filterCook, filterCake, filterChecked, filterSelected } = this.state;
        const { classes } = this.props;

        return(
            <Container maxWidth = "lg"  >
                <Grid container spacing={2}  justify='center' >
                    {cakes.map((cake)=>{
                        if(filterCondition( cake, 
                                            filterCake, 
                                            filterChecked, 
                                            filterSelected, 
                                            this.findDataById(cooks, cake.cookId),
                                            filterCook )
                            ){ 
                            return (
                                <Grid container wrap='wrap' key = {cake.id} item xs={12} sm={6} md={4}  >
                                    <Paper className={classes.paper}>
                                        <CakeCard 
                                            cake = {cake}
                                            type = {this.findDataById(types, cake.typeId)}
                                            cook = {this.findDataById(cooks, cake.cookId)}
                                            onCakeCardOpen = {this.openCakeCard}
                                        />
                                    </Paper>
                                </Grid>
                            )}
                        return '';
                        })
                    }
                </Grid>
            </Container>
        )}
    
    render(){    
        const {cakeCardOpen, cakeCardOpenId, cakes, cooks, types, loading} = this.state;

        if (!cakeCardOpen && !loading) {
            return <>
                {this.renderFilterButton()}
                
                {this.renderFilterForm()}
                
                {this.renderCakeList()}
            </>
        }

        if(cakeCardOpen && !loading){
            const oneCake = this.findDataById (cakes, cakeCardOpenId);
            return (
                <CakeCardFull 
                    onCakeCardOpen = {this.openCakeCard}
                    cakeCardOpenId = {cakeCardOpenId}
                    cake = {oneCake}
                    type = {this.findDataById(types, oneCake.typeId)}
                    cook = {this.findDataById(cooks, oneCake.cookId)}
                />
            )
        }

        if(loading){
            return ( 
               <CircularProgress/>
            )
        }


    }
}
export default withStyles(styles)(CakesList);
      