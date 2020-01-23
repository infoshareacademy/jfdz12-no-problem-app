const FIREBASE_API = 'https://aleciachaapp.firebaseio.com';

export function getUsers(){
    const getUser = fetch(`${FIREBASE_API}/users.json`)
        .then (res => res.json())
        .then (data => data)
        .then (data => {
            const keys = Object.keys(data);
                const formattedData = keys.map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                });
            return formattedData;
        }) 

        .catch(error => console.log(`Nie mogę pobrać danych users ${error.toString()}`));
        
    return Promise.resolve(getUser);
}

export function getCakes(){
    const getCakes = fetch(`${FIREBASE_API}/cakes.json`)
        .then (res => res.json())
        .then (data => {
            const keys = Object.keys(data);
                const formattedData = keys.map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                });
            return formattedData;

        })
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getCakes);
}

export function getTypes(){
    const getTypes = fetch(`${FIREBASE_API}/types.json`)
        .then (res => res.json())
        .then (data => {
            const keys = Object.keys(data);
                const formattedData = keys.map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                });
            return formattedData;
        })
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getTypes);
}

// export function getLikes(){
//     const getLikes = fetch(`${FIREBASE_API}/likes.json`)
//         .then (res => res.json())
//         .then (data => {
//             const keys = Object.keys(data);
//                 const formattedData = keys.map(key => {
//                     return {
//                         id: key,
//                         ...data[key]
//                     }
//                 });
//             return formattedData;
//         })
//         .catch(error => console.log(`Nie mogę pobrać danych likes ${error.toString()}`));  
    
//     return Promise.resolve(getLikes);
// }

export function getCooks(){

    const getData = getUsers()
        .then (data => data.filter(el => (el.userType === 'cook')))
        .catch(error => console.log(`Nie mogę pobrać danych user/cooks ${error.toString()}`));  
 
    return Promise.resolve(getData);
}


export function getCakesById(id){
    // const getCakesById = fetch(CAKES_API_ENDPOINT)
        // .then (res => res.json())
        const getCakesById = getCakes()
        .then (data => data.find(el => el.id === id))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getCakesById);
}

export function getCookById(id){
    // const getData = fetch(USERS_API_ENDPOINT)
    //     .then (res => res.json())
    const getData = getUsers()
        .then (data => data.find(el => (el.id === id && (el.userType === 'cook'))))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getTypeById(id){
    // const getData = fetch(TYPES_API_ENDPOINT)
    //     .then (res => res.json())
    const getData = getTypes()
        .then (data => data.find(el => el.id === id))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getUserById(id){
    // const getData = fetch(USERS_API_ENDPOINT)
    //     .then (res => res.json())
    const getData = getUsers()
        .then (data => data.find(el => el.id === id))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getFullCakeById(id){
    const fullCake = Promise.all([
            // fetch(CAKES_API_ENDPOINT).then(res => res.json()),
            // fetch(USERS_API_ENDPOINT).then(res => res.json()),
            // fetch(TYPES_API_ENDPOINT).then(res => res.json()),
            getCakes(),
            getUsers(),
            getTypes()
        ]) 
        .then(data => {
            const cake = data[0].find(cake => cake.id === id);
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
            getCakes(),
            // fetch(CAKES_API_ENDPOINT).then(res => res.json()),
            // fetch(USERS_API_ENDPOINT).then(res => res.json())
            getUsers().then(data => data.filter(el => el.userType === 'cook')),
            // fetch(TYPES_API_ENDPOINT).then(res => res.json()),
            getTypes()
        ]) 
        .then(data => data)
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
        
    return Promise.resolve(fullData);
}

// export function getLikesWithData (logedUdserId) {

//     const fullData = Promise.all([
//         getLikes(),
//         getCooks(),
//         getTypes(),
//         getCakes()
//         // fetch(LIKES_API_ENDPOINT).then(res => res.json()),
//         // fetch(USERS_API_ENDPOINT).then(res => res.json()).then(data => data.filter(el => el.userType === 'cook')),
//         // fetch(TYPES_API_ENDPOINT).then(res => res.json()),
//         // fetch(CAKES_API_ENDPOINT).then(res => res.json()),
//     ]) 
//     .then(data => {
//         const filteredData = data[0].filter((like) => like.userId === parseInt(logedUdserId));
        
//         const newData = filteredData.map ((like)=>{
//             const likeCake = data[3].find((cake) => like.cakeId === cake.id);
//             const cakeType = data[2].find((type) => type.id === likeCake.typeId);
//             const cookCake = data[1].find((cook) => cook.id === likeCake.cookId);
           
//             const newData = {
//                 ...like,
//                 cake: {
//                     ...likeCake,
//                     typeName: cakeType.name,
//                     typeColor: cakeType.color,
//                     cookName: `${cookCake.name} ${cookCake.surname} `,
//                 },
//             }
//             return newData;
//         });    
       
//         return newData;
//     })
//     .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));

//     return Promise.resolve(fullData);
// }

export function getLikesWithData (logedUdserId) {

    const fullData = Promise.all([
        getUsers(),
        getCooks(),
        getTypes(),
        getCakes()
        // fetch(USERS_API_ENDPOINT).then(res => res.json()),
        // fetch(USERS_API_ENDPOINT).then(res => res.json()).then(data => data.filter(el => el.userType === 'cook')),
        // fetch(TYPES_API_ENDPOINT).then(res => res.json()),
        // fetch(CAKES_API_ENDPOINT).then(res => res.json()),
    ]) 
    .then(data => {
        const likedCakesId = data[0]
            .find((user) => user.id === logedUdserId)
            .likeCakesId || [];
        
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

