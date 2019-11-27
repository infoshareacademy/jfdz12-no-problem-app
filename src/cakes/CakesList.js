import React from 'react'
import Cakes from './Cakes';
import { Container, Card} from 'semantic-ui-react'

const typeCakes = [
    {
        id: 1,
        name: "babki",
        description: "babki"
    },
    {
        id: 2,
        name: "bezy",
        description: "bezy"
    },
    {
        id: 3,
        name: "biszkopty",
        description: "biszkopty"
    },
    {
        id: 4,
        name: "czekoladowe",
        description: "ciasta czekoladowe"
    },
    {
        id: 5,
        name: "drożdżowe",
        description: "ciasta drożdżowe"
    },
    {
        id: 6,
        name: "kurche",
        description: "ciasta kurche"
    },
    {
        id: 7,
        name: "francuskie",
        description: "ciasta francuskie"
    },
    {
        id: 8,
        name: "pażone",
        description: "ciasta pażone"
    },
    {
        id: 9,
        name: "ucierane",
        description: "ciasta ucierane"
    },
    {
        id: 10,
        name: "z makiem",
        description: "ciasta z makiem"
    },
    {
        id: 11,
        name: "z owocami",
        description: "ciasta z owocami"
    },
    {
        id: 12,
        name: "z warzywami",
        description: "ciasta z warzywami"
    },
    {
        id: 13,
        name: "z galaretką",
        description: "ciasta z galaretką"
    },
    {
        id: 14,
        name: "z kremem",
        description: "ciasta z kremem"
    },
    {
        id: 15,
        name: "pierniki",
        description: "ciasta pierniki"
    },
    {
        id: 16,
        name: "seriniki",
        description: "ciasta seriniki"
    },
    {
        id: 17,
        name: "torty",
        description: "ciasta torty"
    },
    {
        id: 18,
        name: "pączki",
        description: "pączki, donaty itp."
    },
    {
        id: 18,
        name: "bez pieczenia",
        description: "ciasta bez pieczenia"
    },
    {
        id: 20,
        name: "inne",
        description: "wszystkie inne"
    }
]



class CakesList extends React.Component{
    state = {
        cakes: [],
        types: []
    };
    

    fetchCake = () => fetch ('./cakes.json').then(res => res.json());
    fetchType = () => fetch ('./types.json').then(res => res.json());

    componentDidMount() {
        
        this.fetchCake()
            .then(res => this.setState({ cakes: res }));

        this.fetchType()
            .then(res => this.setState({ types: res }));
      }

    printConsol = (a) => console.log(a);

    takeType = (type,id) =>{
            return type.filter(el => el.id === id)[0]
      }

    render(){    
        const cakesData = this.state.cakes;
        const typeData = this.state.types;

        //Object.assign(typeData,this.state.types);
        
        //console.log('aaa',typeData[0]);

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

//<CakesListItem cakesArray = {cakes2}/>        
                