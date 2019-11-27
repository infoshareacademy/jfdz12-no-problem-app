import React from 'react'
import Cakes from './Cakes';
import { Container, Card} from 'semantic-ui-react'

class CakesList extends React.Component{
    state = {
        cakes: []
    };
    
    fetchCake = () => fetch ('./cakes.json').then(res => res.json());

    componentDidMount() {   
        this.fetchCake()
            .then(res => this.setState({ cakes: res }));
    }

    render(){    
        const cakesData = this.state.cakes;
   
        return <>
            <Container width = {1200}>
                <Card.Group doubling itemsPerRow={3} stackable>
                    {cakesData.map((el)=>{ 
                        return <Cakes 
                            key = {el.id}
                            cakes = {el}
                            />
                        })
                    }
                </Card.Group>
            </Container>
        </>
    }
}
export default CakesList;
      