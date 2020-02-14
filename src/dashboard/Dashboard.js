import React from 'react';
import TopHero from './TopHero'
import BestCakes from './BestCakes';
import NumberStats from './NumberStats';
import ChartsGrid from './charts/ChartsGrid';

export default function Dashboard() {
   
    return (
        <div>
            <TopHero />
            <BestCakes />
            <NumberStats />
            <ChartsGrid /> 
        </div>
    )
}

