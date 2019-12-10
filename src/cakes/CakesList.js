import React from 'react'
import CakeCard from './CakeCard';
import CakeFilters from './filter/CakeFilters'
import { Container, Grid, Paper } from '@material-ui/core'
import filterCondition from './filter/FilterCondition'
import FilterButton from './filter/FilterButton'
import CakeCardFull from './CakeCardFull';

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

    findCakeById = cakeId => this.state.cakes.find((cake) => cake.id === cakeId) || {}; 

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
        const { cakes, filterCook, filterCake, filterChecked, filterSelected } = this.state;

        return(
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
                            return (
                                <Grid  key = {cake.id} item xs={4} style ={{minWidth: '350px' , maxWidth: '500px', width:'100%'}}>
                                    <Paper >
                                        <CakeCard 
                                            cake = {cake}
                                            type = {this.findTypeData(cake.typeId)}
                                            cook = {this.findCookName(cake.cookId)}
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
        const {cakeCardOpen, cakeCardOpenId} = this.state;

        if (!cakeCardOpen) {
            return <>
                {this.renderFilterButton()}
                
                {this.renderFilterForm()}
                
                {this.renderCakeList()}
            </>
        }

        if(cakeCardOpen){
            const oneCake = this.findCakeById (cakeCardOpenId)
            return (
                <CakeCardFull 
                    onCakeCardOpen = {this.openCakeCard}
                    cakeCardOpenId = {cakeCardOpenId}
                    cake = {oneCake}
                    type = {this.findTypeData(oneCake.typeId)}
                    cook = {this.findCookName(oneCake.cookId)}
                />
            )
        }


    }
}
export default CakesList;
      