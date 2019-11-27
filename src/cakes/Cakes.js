import React from 'react';
import { Image, Card, Icon, Button, Label } from 'semantic-ui-react'

class CakeCard extends React.Component{
    state = {
        cakes: this.props.cakes,
        types: []
    }

    fetchType = () => fetch ('./types.json').then(res => res.json());
    
    componentDidMount() {
        this.fetchType()
            .then(res => this.setState({ types: res }));
      }

    render(){

        const type = this.state.types;
        let typeName = {
            name:'',
            color: ''
        }
        let tcolor = '';

        type.forEach((el)=>{
            if (el.id === this.state.cakes.typeId){
                typeName.name = el.name;
                tcolor = el.color;
            }
        })

        const aaa = 'red'

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
                    kategoria: <Label color={tcolor ? tcolor : 'black'} horizontal>{typeName.name}</Label>
                </Card.Meta>
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
