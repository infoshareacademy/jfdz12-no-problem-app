import React from 'react';
import { Image, Card, Icon, Button, Label } from 'semantic-ui-react'




class CakeCard extends React.Component{
    state = {
        cakes: this.props.cakes,
        type: this.props.type
    }


    render(){
        console.log(this.state.type);
        console.log(this.state.cakes);
        return <Card>
            <Card.Content>
                    
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
                    
                    <p></p>
                    <Card.Header textAlign='left'>{this.state.cakes.name} </Card.Header>
                    <Card.Meta textAlign='left'>cena: {this.state.cakes.price}</Card.Meta>
                    <Card.Meta textAlign='left'>kategoria: {this.state.type.name}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Card.Description>
                        to jest opis ciasta{this.state.cakes.descritionss}  
                    </Card.Description> 
                </Card.Content>
            </Card>
    }
}

export default CakeCard;
