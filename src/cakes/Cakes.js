import React from 'react';
import { Image, Card, Icon, Button, Label } from 'semantic-ui-react'

class CakeCard extends React.Component{
    state = {
        cakes: this.props.cakes,
        types: [],
        cooks: []
    }

    fetchType = () => fetch ('./types.json').then(res => res.json());
    fetchCooks = () => fetch ('./cooks.json').then(res => res.json());

    componentDidMount() {
        this.fetchType()
            .then(res => this.setState({ types: res }));
        
        this.fetchCooks()
            .then(res => this.setState({ cooks: res}));
      }

    render(){

        const type = this.state.types;
        const cook = this.state.cooks;

        let typeData = {
            name:'',
            color: ''
        }

        let cooksData = {
            name: '',
        }

        type.forEach((el)=>{
            if (el.id === this.state.cakes.typeId){
                typeData.name = el.name;
                typeData.color = el.color;
            }
        });

        cook.forEach((el)=>{
            if (el.id === this.state.cakes.cookId){
                cooksData.name = `${el.name} ${el.surname}`;
            }
        })

        return <Card>
            <Card.Content>
                <Card.Header as='h2' textAlign='center'>{this.state.cakes.name} </Card.Header>
                <Image size='small' floated='left' src={this.state.cakes.imgURL} wrapped ui={true} />
                <Card.Meta textAlign='right'>
                    <Button as='div' size='mini' labelPosition='left' >
                        <Label as='a' basic pointing='right' size='mini'>
                            2,048
                        </Label>
                        <Button icon size='mini'>
                            <Icon name='heart' />
                            Like
                        </Button>
                    </Button>
                </Card.Meta>
                
                <Card.Meta textAlign='left'>cena: {this.state.cakes.price}</Card.Meta>
                <Card.Meta textAlign='left'>
                    kategoria: <Label color={typeData.color ? typeData.color : 'black'} horizontal>{typeData.name}</Label>
                </Card.Meta>
                <Card.Meta textAlign='left'>kucharz: {cooksData.name}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Card.Description textAlign='left'>
                    {this.state.cakes.descrition}  
                </Card.Description> 
            </Card.Content>
        </Card>
    }
}

export default CakeCard;
