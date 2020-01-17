import React, { Component } from 'react';
import TopHero from './TopHero'
import BestCakes from './BestCakes';
import NumberStats from './NumberStats';

import ChartPie from './ChartPie';
import ChartLine from './ChartLine';




export default class Dashboard extends Component {


    render() {
       
        return (
            <div>

                <TopHero />
                <BestCakes cakes={this.props.cakes} />
                <NumberStats />
                <ChartPie cakes={this.props.cakes}/>
                <ChartLine />
            </div>
        )
    }
}

