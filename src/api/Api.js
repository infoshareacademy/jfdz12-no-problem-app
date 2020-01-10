class DataManager {
    constructor(){
        this.users = [];
        this.types = [];
        this.cooks = [];
        this.likes = [];
        this.cakes = [];
        fetch('./users.json')
            .then (res => res.json())
            .then (data => {this.users = data;})
            .catch(error => console.log(`Nie mogę pobrać danych users ${error.toString()}`)); 
        fetch('./cooks.json')
            .then (res => res.json())
            .then (data => {this.cooks = data})
            .catch(error => console.log(`Nie mogę pobrać danych cooks ${error.toString()}`)); 
        fetch('./cakes.json')
            .then (res => res.json())
            .then (data => {this.cakes = data})
            .catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`));  
        fetch('./types.json')
            .then(res => res.json())
            .then (data => this.types = data)  
            .catch(error => console.log(`Nie mogę pobrać danych types ${error.toString()}`));
        fetch('./likes.json')
            .then(res => res.json())
            .then (data => this.likes = data)  
            .catch(error => console.log(`Nie mogę pobrać danych likes ${error.toString()}`)); ;  
    } 

    getUsers = () =>{
        this.users.length>0 
            ? console.log('Api getUsers users') 
            : console.log('Api getUsers nie udalo się załadowac danych');
        
        return (this.users);
    }

    getUserById = (id) => {
        const user = this.users.find ((data)=> data.id === parseInt(id));
        
        user !== {} 
            ? console.log('Api getUserById user') 
            : console.log('Api getUserById brak danych lub nie udalo się załadowac danych');
        
        return user;
    }
    
    getCooks = () => {
        this.cooks.length>0 
            ? console.log('Api getCook cooks') 
            : console.log('Api getCook nie udalo się załadowac danych');
        
        return this.cooks;
    }
    
    getTypes = () => {
        this.types.length>0 
            ? console.log('Api getTypes types') 
            : console.log('Api getTypes nie udalo się załadowac danych');
        
        return this.types;
    }

    getLikes = () => {
        this.likes.length>0 
            ? console.log('Api getLikes likes') 
            : console.log('Api getLikes nie udalo się załadowac danych');
        
        return this.likes;
    }

    getLikesWithData = (logedUdserId) =>{

        const filteredData = this.likes.filter((like) => like.userId === parseInt(logedUdserId));

        const data = filteredData.map ((like)=>{
            const likeCake = this.cakes.find((cake) => like.cakeId === cake.id);
            const cakeType = this.types.find((type) => type.id === likeCake.typeId);
            const cookCake = this.cooks.find((cook) => cook.id === likeCake.cookId);
           
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

        return data;
    }

}

const dataManager = new DataManager() 
export {dataManager};

