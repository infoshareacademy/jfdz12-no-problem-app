import React from 'react'
import CakeCard from './CakeCard';
import CakeFilters from './filter/CakeFilters'
import { Container, Card } from 'semantic-ui-react'
import filterCondition from './filter/FilterCondition'
import FilterButton from './filter/FilterButton'


class CakesList extends React.Component{
    state = {
        cakes: [],
        cooks: [],
        filterName: '', 
        filterCook: '',
        checked: false,
        selected: [],
        filterProp: {
            visible: 'hidden',
            arrow: 'angle double right'
        }
    };

    fetchCake = () => {fetch ('./cakes.json')
            .then(res => res.json())
            .then(res => this.setState({ cakes: res }));
    }

    fetchCooks = () => {fetch ('./cooks.json')
        .then(res => res.json())
        .then(res => this.setState({ 
            cooks: res.map((cook) =>{
                return {
                    cookId: cook.id,
                    cookName: `${cook.name} ${cook.surname}` 
                }})
        }));
    }

    componentDidMount() {
        this.fetchCake();
        this.fetchCooks();
    }   
    
    filterNameChange = (filterName) =>{
        this.setState ({filterName});
    }

    filterCookChange = (filterCook) =>{
        this.setState({filterCook});
    }

    reset = () => this.setState({filterName: ''});

    resetCook = () =>this.setState({filterCook: ''});

    filterVisibility = () =>{
        this.setState({filterProp :{
            visible : this.state.filterProp.visible === 'hidden' ? 'visible' : 'hidden',
            arrow: this.state.filterProp.visible === 'hidden' ? 'angle double left' : 'angle double right'
        }});
    }

    filterCheckboxChange = () => {
        this.setState({checked: this.state.checked ? false : true});
    }

    handleChangeType = (e, {value}) => {
        this.setState({ selected: value });
    };

    filterCook = (id) =>{
        this.state.cooks.find((cookId) => {
            return cookId === id;
        });
    }
    
    render(){    
        const {cakes, filterName, filterCook, checked, selected, filterProp, cooks} = this.state;
       
        return <>
            
            <FilterButton
                onButtonClick = {this.filterVisibility}
                iconName = {filterProp.arrow}
            />
            
            <CakeFilters 
                filterNameValue = {filterName}
                filterCookName = {filterCook}
                checkboxChecked ={checked} 
                onNameChange = {this.filterNameChange}
                onCookChange = {this.filterCookChange}
                onReset = {this.reset}
                onResetCook = {this.resetCook}
                onChecked = {this.filterCheckboxChange}
                onCheckedType = {this.handleChangeType}
                filterPropVisible = {filterProp.visible}
            />
            <br></br>
            
            <Container width = {1200}>
                <Card.Group doubling itemsPerRow={3} stackable>
                    {cakes.map((cake)=>{
                        const {cookName} = (cooks.find((el) => el.cookId === cake.cookId)) || {}
         
                        if(filterCondition(cake, filterName, checked, selected, cookName, filterCook)){ 
                            return <CakeCard 
                                key = {cake.id}
                                cakes = {cake}
                                />
                            }
                        return '';
                        })
                    }
                </Card.Group>
            </Container>
        </>
    }
}
export default CakesList;
      