
export function getUsers(){
    const getUser = fetch('/users.json')
        .then (res => res.json())
        .then (data => data)
        .catch(error => console.log(`Nie mogę pobrać danych users ${error.toString()}`)); 
        
    return Promise.resolve(getUser);
}

export function getCakes(){
    const getCakes = fetch('/cakes.json')
        .then (res => res.json())
        .then (data => data)
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getCakes);
}

export function getCakesById(id){
    const getCakesById = fetch('/cakes.json')
        .then (res => res.json())
        .then (data => data.find(el => el.id === parseInt(id)))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getCakesById);
}

export function getCookById(id){
    const getData = fetch('/cooks.json')
        .then (res => res.json())
        .then (data => data.find(el => el.id === parseInt(id)))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getTypeById(id){
    const getData = fetch('/types.json')
        .then (res => res.json())
        .then (data => data.find(el => el.id === parseInt(id)))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getUserById(id){
    const getData = fetch('/users.json')
        .then (res => res.json())
        .then (data => data.find(el => el.id === parseInt(id)))
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getData);
}

export function getFullCakeById(id){
    const fullCake = Promise.all([
            fetch('../cakes.json').then(res => res.json()),
            fetch('../cooks.json').then(res => res.json()),
            fetch('../types.json').then(res => res.json()),
        ]) 
        .then(data => {
            const cake = data[0].find(cake => cake.id === parseInt(id));
            return {
                ...cake,
                type: data[2].find(type => type.id === cake.typeId),
                cook: data[1].find(cook => cook.id === cake.cookId),
            }    
        })
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
        
    return Promise.resolve(fullCake);
}

export function getFullData(){
    const fullData = Promise.all([
            fetch('../cakes.json').then(res => res.json()),
            fetch('../cooks.json').then(res => res.json()),
            fetch('../types.json').then(res => res.json()),
        ]) 
        .then(data => data)
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
        
    return Promise.resolve(fullData);
}

export function getLikesWithData (logedUdserId) {

    const fullData = Promise.all([
        fetch('../likes.json').then(res => res.json()),
        fetch('../cooks.json').then(res => res.json()),
        fetch('../types.json').then(res => res.json()),
        fetch('../cakes.json').then(res => res.json()),
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