import { getUsers, getCooks, getCakes, getTypes } from './Api2';

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
    })
    return Promise.resolve(amountAll); 
} 

export function getCountOfCookInCity(){

    const cooksCity = getCooks()
    .then ((cooks) => cooks.map(cook =>  cook.location.city.toUpperCase()))
    .then((data) =>{
        const cityCooks = data.reduce((accu,curr )=>{
            return accu.includes(curr) 
                ? accu 
                : [ ...accu, curr] 
        },[]);
     
        const cityRank = cityCooks.map(city => {
            const countCity = data.filter((el)=> city === el ).length
            return [city, countCity]
        });

        const setFirst3City = cityRank.splice(0,3);
        const setOtherSum =cityRank.reduce((accu, curr) => {
                return accu + curr[1]
        },0);

        return [setFirst3City, setOtherSum];

    })

    return Promise.resolve(cooksCity); 
} 

export function getTypesFromCake(){

    const typesFromCake = Promise.all([
        getCakes(),
        getTypes(),
    ])
    .then((data) => {
        const uniqueIdTypes = data[0].reduce((accu,curr)=>{
            return accu.includes(curr.typeId) 
                ? accu 
                : [ ...accu, curr.typeId] 
        },[]);
        
        const listOfData = uniqueIdTypes.map((typeId) =>{
            const type = data[1].find(type => type.id === typeId);
            const countType = data[0].filter(cake => cake.typeId === typeId).length;
            return {
                typeName: type.name,
                typeColor: type.color,
                typeCount: countType
            }
        });

        return listOfData;
    }) 
    
    return Promise.resolve(typesFromCake);
}