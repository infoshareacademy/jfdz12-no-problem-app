import React from 'react'
import CakeCard from './CakeCard';
import CakeFilters from './filter/CakeFilters'
import { Container, Card } from 'semantic-ui-react'
import filterCondition from './filter/FilterCondition'
import FilterButton from './filter/FilterButton'


class CakesList extends React.Component{
    state = {
        cakes: [],
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

    componentDidMount() {
        this.fetchCake();
    }   
    
    filterNameChange = (filterName) =>{
        this.setState ({filterName});
    }

    filterCookChange = (filterCook) =>{
        this.setState({filterCook});
    }

    reset = () => {
        this.setState({filterName: ''});
    }

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
    
    render(){    
        const {cakes, filterName, filterCook, checked, selected, filterProp} = this.state;
        console.log(filterCook)
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
                onChecked = {this.filterCheckboxChange}
                onCheckedType = {this.handleChangeType}
                filterPropVisible = {filterProp.visible}
            />
            <br></br>
            
            <Container width = {1200}>
                <Card.Group doubling itemsPerRow={3} stackable>
                    {cakes.map((cake)=>{
                        if(filterCondition(cake, filterName, checked, selected)){ 
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
      