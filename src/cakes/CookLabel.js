import React from 'react';
import {Card, CardHeader,  Typography, Avatar } from '@material-ui/core';

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
            <Card className="cookLabelCard" >
                
                <CardHeader 
                        className = "cookLabelHeader"
                        avatar= {<Avatar
                            src={cooksData.avatar}
                            variant="circle"
                            />}
                        title = {`cukiernik: ${cooksData.name}`} 
                        subheader = {`z miasta ${cooksData.city}`}
                />

            </Card>
        </>
    }
}

export default CookLabel;
