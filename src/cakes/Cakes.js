import React from 'react';
import { Image, Card, Icon, Button, Label } from 'semantic-ui-react';
import TypeLabel from './TypeLabel';
import CookLabel from './CookLabel';

class CakeCard extends React.Component{
    state = {
        cakes: this.props.cakes,
        cooks: []
    }

    fetchCooks = () => fetch ('./cooks.json').then(res => res.json());

    componentDidMount() {
    
        this.fetchCooks()
            .then(res => this.setState({ cooks: res}));
      }

    render(){

        const cook = this.state.cooks;

        let cooksData = {
            name: '',
            city: ''
        }

        cook.forEach((el)=>{
            if (el.id === this.state.cakes.cookId){
                cooksData.name = `${el.name} ${el.surname}`;
                cooksData.city = `${el.location.city}`;
            }
        })

        return <Card>
            <Card.Content>
                <Card.Header as='h2' textAlign='center'>{this.state.cakes.name} </Card.Header>
                <Image size='small' floated='left' src={this.state.cakes.imgURL} wrapped ui={true} />
                <Card.Meta textAlign='right'>
                    <Button as='div' size='mini' labelPosition='left' >
                        <Label as='a' basic pointing='right' size='mini'>
                            48
                        </Label>
                        <Button icon size='mini'>
                            <Icon name='heart' />
                            Like
                        </Button>
                    </Button>
                </Card.Meta>
                
                <Card.Meta textAlign='left' style = {{paddingTop:'0.4em'}}>
                    <span className='colorMeta'>cena:
                        <span style = {{fontWeight: 'bold', float:'right'}}> 
                            {this.state.cakes.price} zł
                        </span>
                    </span>
                </Card.Meta>
                <Card.Meta style = {{paddingTop:'0.4em'}} textAlign='left'> 
                    <TypeLabel  typeId = {this.state.cakes.typeId} />
                </Card.Meta>
                <Card.Meta style = {{paddingTop:'0.4em'}} textAlign='left'>
                    bezglutenowe: <span className='floatRight' >{this.state.cakes.glutenFree ? ' tak': ' nie'}</span> 
                </Card.Meta>
                
                <Card.Description textAlign='left'>
                    {this.state.cakes.descrition}  
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <CookLabel cookId = {this.state.cakes.cookId} />
            </Card.Content>
        </Card>
    }
}

export default CakeCard;
