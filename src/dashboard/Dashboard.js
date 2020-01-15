import React, { Component } from 'react';
import TopHero from './TopHero'
import BestCakes from './BestCakes';
import NumberStats from './NumberStats';
import TopHero2 from './TopHero2';
import Chart from './Chart'



export default class Dashboard extends Component {
    
    render() {
       
        return (
            <div>
                <TopHero2 />
                <BestCakes cakes={this.props.cakes} />
                <NumberStats />
                <Chart cakes={this.props.cakes}/>
            </div>
        )
    }
}

