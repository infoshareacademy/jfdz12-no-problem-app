import { getUsers, getCooks, getCakes, } from './Api2';

export function getAmountDataAll(){

    const amountAll = Promise.all([
        getUsers(),
        getCooks(),
        getCakes()
    ]) 
    .then ((data) => {
        const amountUsers = data[0].length;
        const amountCooks = data[1].length;
        const amountCakes = data[2].length;
        const prepareCity = data[1].map( data => data.location.city)
        const amoutOfCity = prepareCity.reduce((accu,curr )=>{
            const cityUp = curr.toUpperCase();
            return accu.includes(cityUp) 
                ? accu 
                : [ ...accu, cityUp] 
        },[]).length;

        return {
            amountUsers,
            amountCooks,
            amountCakes,
            amoutOfCity
        }
    }
    
    
    )
    return Promise.resolve(amountAll); 
} 

export function getCountOfCookInCity(){

    const cooksCity = getCooks()
    .then ((cooks) => cooks.map(cook =>  cook.location.city.toUpperCase()))
    
    
    return Promise.resolve(cooksCity); 
} 

