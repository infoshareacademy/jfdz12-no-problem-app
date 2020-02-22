import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper';
import { getCooks, getCakes } from '../api/Api2';
import { Container, Grid } from '@material-ui/core';
import CookPanel from './CookPanel'

export default class CooksList extends Component {

    state = {
        cooks: [],
        cakes: []
    }
//Promise.all!!!!
    componentDidMount() {
        getCooks()
        .then(data=>
        this.setState({
            cooks: data
        })
        );
        getCakes()
        .then(data=>
            this.setState({
                cakes: data
            }))
    }

    render() {
      
        return (
            <PageWrapper>
                <Container>
                    <Grid>
                        <h1>Pieczemy za Ciebie!</h1>
                        {this.state.cooks.map(cook=>{
                            const cooksCakes = this.state.cakes.filter(cake=> cake.cookId===cook.id);
                            return (
                                <CookPanel key={cook.id} cook={cook} cooksCakes={cooksCakes}/>
                        )})}
                    </Grid>
                </Container>
            </PageWrapper>
        )
    }
}
