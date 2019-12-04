import React from 'react';
import { Image, Card } from 'semantic-ui-react'

class CookLabel extends React.Component{
    state = {
        cookId: this.props.cookId,
        cooks: []
    }

    fetchCooks = () => fetch ('./cooks.json')
            .then(res => res.json())
            .then(res => this.setState({ cooks: res}));

    componentDidMount() {
        this.fetchCooks()
      }

    render(){

        const {cooks, cookId} = this.state;
        let cooksData = {};

        cooks.forEach((el)=>{
            if (el.id === cookId){
                cooksData = {
                    name: `${el.name} ${el.surname}`,
                    city: `${el.location.city}`,
                    avatar: `${el.avatar}`
                }
            }
        })

        return <>
            <Image
                    floated='right'
                    size='mini'
                    src={cooksData.avatar}
                    circular
            />
            <Card.Header textAlign='left'>cukiernik: {cooksData.name}</Card.Header>
            <Card.Meta textAlign='left'>z miasta {cooksData.city}</Card.Meta>  
        </>
    }
}

export default CookLabel;
