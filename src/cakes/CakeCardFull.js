import React from 'react';
import { Card, Typography, Button } from '@material-ui/core';

class CakeCardFull extends React.Component{

    openCakeCard = (id,e) => this.props.onCakeCardOpen(id,e);

    render(){
       
        return <Card>
            <Typography variant="h4">to jest karta cistka</Typography>
            <p>props:{this.props.cakeCardOpenId}</p>
            <p>{this.props.cake.id}</p>
            <p>{this.props.cook.name}</p>
            <p>{this.props.type.name}</p>
            <p>{this.props.inne}</p>
            <Button onClick={this.openCakeCard}> powrót </Button>
            
        </Card>
    }

}

export default CakeCardFull;