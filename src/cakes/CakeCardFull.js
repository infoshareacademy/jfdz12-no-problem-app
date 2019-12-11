import React from 'react';
import { Card, Typography, Button } from '@material-ui/core';

class CakeCardFull extends React.Component{

    openCakeCard = () => this.props.onCakeCardOpen();

    render(){
        return <Card>
            <Typography variant="h4">to jest karta cistka</Typography>
            <p>props:{this.props.cakeCardOpenId}</p>
            <p>{this.props.cake.name}</p>
            <p>{this.props.cook.name}</p>
            <p>{this.props.type.typeName}</p>
            <Button onClick={this.openCakeCard}> powrót </Button>
            
        </Card>
    }

}

export default CakeCardFull;