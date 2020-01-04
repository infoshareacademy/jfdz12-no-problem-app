class DataManager {
    constructor(){
        this.users = [];
        this.types = [];
        this.cooks = [];
        fetch('./users.json')
        .then (res => res.json())
        .then (data => {
            this.users = data;        
        }); 
        fetch('./cooks.json')
            .then (res => res.json())
            .then (data => {this.cooks = data}); 
        fetch('./types.json')
            .then(res => res.json())
            .then (data => this.types = data);  

    } 

    getUsers = () =>{
        console.log('pobrałem users');
        return (this.users);
    }

    getUserById = (id) => {
        const user = this.users.find ((data)=> data.id === parseInt(id));
        return user;
    }
    
    getCooks = () => {
        console.log('pobrałem cooks');
        return this.cooks;
         
    }
    
    getTypes = () => {
        console.log('pobrałem types');
        return this.types;
    }
    
}

const dataManager = new DataManager() 
export {dataManager}