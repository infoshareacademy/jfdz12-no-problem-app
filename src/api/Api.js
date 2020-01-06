class DataManager {
    constructor(){
        this.users = [];
        this.types = [];
        this.cooks = [];
        fetch('./users.json')
            .then (res => res.json())
            .then (data => {this.users = data;})
            .catch(error => console.log(`Nie mogęe pobrać damnych users ${error.toString()}`)); 
        fetch('./cooks.json')
            .then (res => res.json())
            .then (data => {this.cooks = data})
            .catch(error => console.log(`Nie mogęe pobrać damnych cooks ${error.toString()}`)); ; 
        fetch('./types.json')
            .then(res => res.json())
            .then (data => this.types = data)  
            .catch(error => console.log(`Nie mogęe pobrać damnych types ${error.toString()}`)); ; 
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
            ? console.log('Api getUserById user', user) 
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
    
}

const dataManager = new DataManager() 
export {dataManager}