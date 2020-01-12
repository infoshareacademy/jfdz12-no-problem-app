
export function getUsers(){
    const getUser = fetch('./users.json')
        .then (res => res.json())
        .then (data => {this.users = data;})
        .catch(error => console.log(`Nie mogę pobrać danych users ${error.toString()}`)); 
        
    return Promise.resolve(getUser);
}

export function getCakes(){
    const getCakes = fetch('./cakes.json')
        .then (res => res.json())
        .then (data => {this.cakes = data})
        .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
    
    return Promise.resolve(getCakes);
}



// fetch('./cooks.json')
// .then (res => res.json())
// .then (data => {this.cooks = data})
// .catch(error => console.log(`Nie mogę pobrać danych cooks ${error.toString()}`)); 
// fetch('./types.json')
// .then(res => res.json())
// .then (data => this.types = data)  
// .catch(error => console.log(`Nie mogę pobrać danych types ${error.toString()}`));
// fetch('./likes.json')
// .then(res => res.json())
// .then (data => this.likes = data)  
// .catch(error => console.log(`Nie mogę pobrać danych likes ${error.toString()}`)); ;  
// } 

// getUsers = () =>{
// this.users.length>0 
// ? console.log('Api getUsers users') 
// : console.log('Api getUsers nie udalo się załadowac danych');

// return (this.users);
// }
// Promise.all([
//     //fetch('http://localhost:4000/cakes').then(res => res.json()),
//     fetch('./cakes.json').then(res => res.json()),
//     fetch('./cooks.json').then(res => res.json()),
//     fetch('./types.json').then(res => res.json()),
    
// ]).then(data => {
//     const price = data[0].map(el => el.price); 
//     this.setState({
//         cakes: data[0],
//         cooks: data[1],
//         types: data[2],
//         priceRange: [Math.min(...price),Math.max(...price)],
//         cakesMaxId: Math.max(...data[0].map(el => (el.id))), 
//         loading: false,
//     })
// })