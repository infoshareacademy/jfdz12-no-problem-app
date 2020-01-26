import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper';
import { getCooks } from '../api/Api2';

export default class CooksList extends Component {

    state = {
        cooks: []
    }

    componentDidMount() {
        getCooks()
        .then(data=>
        this.setState({
            cooks: data
        })
        )
    }

    render() {
        return (
            <PageWrapper>
                <h1>Pieczemy za Ciebie!</h1>
                <ul>
                {this.state.cooks.map(cook=><li>{cook.name}</li>)}
                </ul>
            </PageWrapper>
        )
    }
}
