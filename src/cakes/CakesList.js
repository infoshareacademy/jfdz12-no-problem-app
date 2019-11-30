import React from 'react'
import CakeCard from './CakeCard';
import CakeFilter from './filter/CakeFilter'
import { Container, Card} from 'semantic-ui-react'

class CakesList extends React.Component{
    state = {
        cakes: [],
        nameFilter: '' ,
        onReset: false
    };

    filterNameChange = this.filterNameChange.bind(this);
    reset = this.reset.bind(this);
    
    fetchCake = () => {fetch ('./cakes.json')
            .then(res => res.json())
            .then(res => this.setState({ cakes: res }));
    }

    componentDidMount() {   
        this.fetchCake()
    }

    filterNameChange(nameFilter){
        this.setState ({nameFilter})
    }

    reset (){
        this.setState({nameFilter: ''})
    }


    render(){    
        const {cakes} = this.state;
        const {nameFilter} = this.state;
       
        return <>
            <CakeFilter 
                filterNameValue = {nameFilter}
                onNameChange = {this.filterNameChange}
                onReset = {this.reset}
            />
            <p>---</p>
            <Container width = {1200}>
                <Card.Group doubling itemsPerRow={3} stackable>
                    {cakes.map((cake)=>{
                        if(cake.name.toLowerCase().includes(nameFilter.toLowerCase())){ 
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
      