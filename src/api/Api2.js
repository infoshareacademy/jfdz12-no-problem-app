export const FIREBASE_API = 'https://aleciachaapp.firebaseio.com';

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

export function getCooks(){

    const getData = getUsers()
        .then (data => data.filter(el => (el.userType === 'cook')))
        .catch(error => console.log(`Nie mogę pobrać danych user/cooks ${error.toString()}`));  
 
    return Promise.resolve(getData);
}


export function getCakesById(id){
  
    const getCakesById = getCakes()
        .then (data => data.find(el => el.id === id))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getCakesById);
}

export function getCakesByCookId(id){
  
    const getCakesByCookId = getCakes()
        .then (data => data.filter(el => el.cookId === id))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getCakesByCookId);
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
    const getData = getUsers()
        .then (data => data.find(el => el.id === id))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getUserByUid(uid){
    const getData = getUsers()
        .then (data => data.find(el => el.uid === uid))
        .catch(error => console.log(`Nie mogę pobrać danych cakes uid ${error.toString()}`));  
    
    return Promise.resolve(getData);
}


export function getCakeWithTypeByCookId(id){
    const fullCake = Promise.all([
            getCakes(),
            getTypes()
        ]) 
        .then(data => {
            const cakes = data[0].filter(cake => cake.cookId === id);
            return cakes.map ((cake) => {
                    return {
                        ...cake,
                        type: data[1].find(type => type.id === cake.typeId),
                    }
                })
            }  
        )
        .catch(error => console.log(`Nie mogę pobrać danych cakes with types ${error.toString()}`));  
        
    return Promise.resolve(fullCake);
}

export function getFullCakeById(id){
    const fullCake = Promise.all([
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
            getUsers().then(data => data.filter(el => el.userType === 'cook')),
            getTypes()
        ]) 
        .then(data => data)
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
        
    return Promise.resolve(fullData);
}

export function getLikesWithData (logedUdserId) {

    const fullData = Promise.all([
        getUsers(),
        getCooks(),
        getTypes(),
        getCakes()
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

export function addNewCakeFetch(cakeAdd) {
    
    return fetch(`${FIREBASE_API}/cakes.json`, {
                    method: 'POST',
                    body: JSON.stringify(cakeAdd)
                })
} 

export function updateCakeFetch(cakeAdd, cakeId){
    return fetch(`${FIREBASE_API}/cakes/${cakeId}.json`, {
        method: 'PUT',
        body: JSON.stringify(cakeAdd)
    })
}

export function deleteCakeFetch(cakeId){
    return fetch(`${FIREBASE_API}/cakes/${cakeId}.json`, {
        method: 'DELETE',
    })
}

export function addlikeToCake (cakeId, userId) {
    return fetch(`${FIREBASE_API}/cakes/${cakeId}/likes.json`, {
        method: 'PATCH',
        body: JSON.stringify(userId)
    })
}