import React, { useEffect, useState } from 'react';
import TopHero from './TopHero'
import BestCakes from './BestCakes';
import NumberStats from './NumberStats';
import ChartsGrid from './charts/ChartsGrid';
import { getAmountDataAll, getCountOfCookInCity, getTypesFromCake } from '../api/ApiChart';
import { CircularProgress } from '@material-ui/core';


export default function Dashboard() {
   
    const [dataAmount, setDataAmount] = useState({});
    const [first3City, setFirst3City] = useState([]);
    const [otherSum, setOtherSum ] = useState(0);
    const [countTypes, setCountTypes] = useState([]); 
    const [isLoading, setIsLoading ] = useState(true);

    useEffect (()=>{
        Promise.all([
            getAmountDataAll(),
            getCountOfCookInCity(),
            getTypesFromCake()
        ])
        .then((data) =>{
            setDataAmount(data[0]);
            setOtherSum(data[1][1]);
            setFirst3City(data[1][0]);
            setCountTypes(data[2]);
        })
        .finally(() => setIsLoading(false))
    },[]);

    if(isLoading) {
        return <CircularProgress color="secondary" />
    }

    return (
        <div>
            <TopHero />
            <BestCakes />
            <NumberStats dataAmount={dataAmount} />
            <ChartsGrid 
                first3City = {first3City}
                otherSum = {otherSum}
                countTypes = {countTypes}
            /> 
        </div>
    )
}

