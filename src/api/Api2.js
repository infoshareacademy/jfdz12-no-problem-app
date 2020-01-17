const USERS_API_ENDPOINT = '/users.json';
const CAKES_API_ENDPOINT = '/cakes.json';
const TYPES_API_ENDPOINT = '/types.json';
const LIKES_API_ENDPOINT = '/likes.json';


export function getUsers(){
    const getUser = fetch(USERS_API_ENDPOINT)
        .then (res => res.json())
        .then (data => data)
        .catch(error => console.log(`Nie mogę pobrać danych users ${error.toString()}`)); 
        
    return Promise.resolve(getUser);
}

export function getCakes(){
    const getCakes = fetch(CAKES_API_ENDPOINT)
        .then (res => res.json())
        .then (data => data)
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getCakes);
}

export function getCakesById(id){
    const getCakesById = fetch(CAKES_API_ENDPOINT)
        .then (res => res.json())
        .then (data => data.find(el => el.id === parseInt(id)))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getCakesById);
}

export function getCookById(id){
    const getData = fetch(USERS_API_ENDPOINT)
        .then (res => res.json())
        .then (data => data.find(el => (el.id === parseInt(id) && (el.userType === 'cook'))))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getTypeById(id){
    const getData = fetch(TYPES_API_ENDPOINT)
        .then (res => res.json())
        .then (data => data.find(el => el.id === parseInt(id)))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getUserById(id){
    const getData = fetch(USERS_API_ENDPOINT)
        .then (res => res.json())
        .then (data => data.find(el => el.id === parseInt(id)))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getFullCakeById(id){
    const fullCake = Promise.all([
            fetch(CAKES_API_ENDPOINT).then(res => res.json()),
            fetch(USERS_API_ENDPOINT).then(res => res.json()),
            fetch(TYPES_API_ENDPOINT).then(res => res.json()),
        ]) 
        .then(data => {
            const cake = data[0].find(cake => cake.id === parseInt(id));
            return {
                ...cake,
                type: data[2].find(type => type.id === cake.typeId),
                cook: data[1].find(cook => (cook.id === cake.cookId)&& (cook.userType === 'cook')),
            }    
        })
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
        
    return Promise.resolve(fullCake);
}

export function getFullData(){
    const fullData = Promise.all([
            fetch(CAKES_API_ENDPOINT).then(res => res.json()),
            fetch(USERS_API_ENDPOINT).then(res => res.json()).then(data => data.filter(el => el.userType === 'cook')),
            fetch(TYPES_API_ENDPOINT).then(res => res.json()),
        ]) 
        .then(data => data)
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
        
    return Promise.resolve(fullData);
}

export function getLikesWithData (logedUdserId) {

    const fullData = Promise.all([
        fetch(LIKES_API_ENDPOINT).then(res => res.json()),
        fetch(USERS_API_ENDPOINT).then(res => res.json()).then(data => data.filter(el => el.userType === 'cook')),
        fetch(TYPES_API_ENDPOINT).then(res => res.json()),
        fetch(CAKES_API_ENDPOINT).then(res => res.json()),
    ]) 
    .then(data => {
        const filteredData = data[0].filter((like) => like.userId === parseInt(logedUdserId));
        
        const newData = filteredData.map ((like)=>{
            const likeCake = data[3].find((cake) => like.cakeId === cake.id);
            const cakeType = data[2].find((type) => type.id === likeCake.typeId);
            const cookCake = data[1].find((cook) => cook.id === likeCake.cookId);
           
            const newData = {
                ...like,
                cake: {
                    ...likeCake,
                    typeName: cakeType.name,
                    typeColor: cakeType.color,
                    cookName: `${cookCake.name} ${cookCake.surname} `,
                },
            }
            return newData;
        });    
       
        return newData;
    })
    .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));

    return Promise.resolve(fullData);
}

export function getLikesWithData2 (logedUdserId) {

    const fullData = Promise.all([
        fetch(USERS_API_ENDPOINT).then(res => res.json()),
        fetch(USERS_API_ENDPOINT).then(res => res.json()).then(data => data.filter(el => el.userType === 'cook')),
        fetch(TYPES_API_ENDPOINT).then(res => res.json()),
        fetch(CAKES_API_ENDPOINT).then(res => res.json()),
    ]) 
    .then(data => {
        const likedCakesId = data[0]
            .find((user) => user.id === parseInt(logedUdserId))
            .likeCakesId;

        const newData = likedCakesId.map ((like)=>{
            const likeCake = data[3].find((cake) => like === cake.id);
            const cakeType = data[2].find((type) => type.id === likeCake.typeId);
            const cookCake = data[1].find((cook) => cook.id === likeCake.cookId);
           
            const newData = {
                cake: {
                    ...likeCake,
                    typeName: cakeType.name,
                    typeColor: cakeType.color,
                    cookName: `${cookCake.name} ${cookCake.surname} `,
                },
            }
            return newData;
        });    
        
        return newData;
    })
    .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));

    return Promise.resolve(fullData);
}


// export function getUsers(){
//     const getUser = fetch(USERS_API_ENDPOINT)
//         .then (res => res.json())
//         .then (data => data.map(user => ({
//                 id: user.id,
//                 nick: user.nick,
//                 name: user.name,
//                 surname: user.surname,
//                 contact: {
//                     mail: user.contact.mail,
//                     mobile: user.contact.mobile,
//                 },
//                 gender: user.gender,
//                 userType: user.userType,
//             })
//         ))
//         .catch(error => console.log(`Nie mogę pobrać danych users ${error.toString()}`)); 
        
//     return Promise.resolve(getUser);
// }