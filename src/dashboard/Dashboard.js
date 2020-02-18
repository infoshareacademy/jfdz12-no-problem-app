import React, { useEffect, useState } from 'react';
import TopHero from './TopHero'
import BestCakes from './BestCakes';
import NumberStats from './NumberStats';
import ChartsGrid from './charts/ChartsGrid';
import { getAmountDataAll, getCountOfCookInCity } from '../api/ApiChart';
import { CircularProgress } from '@material-ui/core';


export default function Dashboard() {
   
    const [dataAmount, setDataAmount] = useState({});
    const [first3City, setFirst3City] = useState([]);
    const [otherSum, setOtherSum ] = useState(0); 
    const [isLoading, setIsLoading ] = useState(true);

    useEffect (()=>{
        Promise.all([
            getAmountDataAll(),
            getCountOfCookInCity()
        ])
        .then((data) =>{
            setDataAmount(data[0]);

            const cityCooks = data[1].reduce((accu,curr )=>{
                return accu.includes(curr) 
                    ? accu 
                    : [ ...accu, curr] 
            },[])
            
            const cityRank = cityCooks.map(city => {
                const countCity = data[1].filter((el)=> city === el ).length
                return [city, countCity]
            })

            setFirst3City( cityRank.splice(0,3));
            setOtherSum(cityRank.reduce((accu, curr) => {
                    return accu + curr[1]
            },0))
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
            /> 
        </div>
    )
}

