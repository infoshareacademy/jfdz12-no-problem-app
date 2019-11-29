import React from 'react'
import CakeCard from './CakeCard';
import { Container, Card} from 'semantic-ui-react'

class CakesList extends React.Component{
    state = {
        cakes: []
    };
    
    fetchCake = () => {fetch ('./cakes.json')
            .then(res => res.json())
            .then(res => this.setState({ cakes: res }));
    }

    componentDidMount() {   
        this.fetchCake()
    }

    render(){    
        const {cakes} = this.state;
   
        return <>
            <Container width = {1200}>
                <Card.Group doubling itemsPerRow={3} stackable>
                    {cakes.map((cake)=>{ 
                        return <CakeCard 
                            key = {cake.id}
                            cakes = {cake}
                            />
                        })
                    }
                </Card.Group>
            </Container>
        </>
    }
}
export default CakesList;
      