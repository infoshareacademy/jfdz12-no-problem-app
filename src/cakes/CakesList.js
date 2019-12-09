import React from 'react'
import CakeCard from './CakeCard';
import CakeFilters from './filter/CakeFilters'
import { Container, Grid, Paper } from '@material-ui/core'
import filterCondition from './filter/FilterCondition'
import FilterButton from './filter/FilterButton'


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
        }))
    }
        
    filterCakeChange = (filterCake) =>{
        this.setState ({filterCake});
    }

    filterCookChange = (filterCook) =>{
        this.setState({filterCook});
    }

    reset = () => this.setState({filterCake: ''});

    resetCook = () =>this.setState({filterCook: ''});

    filterVisibility = () =>{
        this.setState({filterProp :{
            visible : this.state.filterProp.visible === 'hidden' ? 'visible' : 'hidden',
            arrow: this.state.filterProp.visible === 'hidden' ? 'angle double left' : 'angle double right'
        }});
    }

    filterCheckboxChange = () => {
        this.setState({filterChecked: this.state.filterChecked ? false : true});
    }

    handleChangeType = (e, {value}) => {
        this.setState({ filterSelected: value });
    };

    findCookName = (id) =>{
        const cookFind = this.state.cooks.find((cook) => cook.id === id) || {};
        return {
            cookLongName: `${cookFind.name} ${cookFind.surname}`,
            cookData: cookFind,
        };
    }

    findTypeData = (typeId) =>{
        const typeFind = this.state.types.find((type) => type.id === typeId) || {};
        return {
            typeName: typeFind.name,
            typeColor: typeFind.color,
        };
    }
    
    render(){    
        const {
                cakes, 
                filterCook, 
                filterCake, 
                filterChecked, 
                filterSelected, 
                filterProp,
            } = this.state;

        return <>
            
            <FilterButton
                onButtonClick = {this.filterVisibility}
                iconName = {filterProp.arrow}
            />
            
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
            
            <Container maxWidth = "lg"  >
                <Grid container spacing={3} wrap = 'wrap' alignContent="space-around" alignItems="flex-start" >
                    {cakes.map((cake)=>{
                        if(filterCondition( cake, 
                                            filterCake, 
                                            filterChecked, 
                                            filterSelected, 
                                            this.findCookName(cake.cookId),
                                            filterCook)
                           ){ 
                            return <Grid  key = {cake.id} item xs={4} style ={{minWidth: '300px'}}>
                                        <Paper >
                                            <CakeCard 
                                                cakes = {cake}
                                                type = {this.findTypeData(cake.typeId)}
                                                cook = {this.findCookName(cake.cookId)}
                                            />
                                        </Paper>
                                    </Grid>
                            }
                        return '';
                        })
                    }
                </Grid>
            </Container>
        </>
    }
}
export default CakesList;
      