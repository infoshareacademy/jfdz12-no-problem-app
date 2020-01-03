export function getUsers(){
    
    return fetch('./users.json')
        .then(res => res.json())
        .then (data => {
            const users = data;
            return Promise.resolve( users )
        });
     
}

export function getTypes(){
    
    return fetch('./types.json')
        .then(res => res.json())
        .then (data => {
            return Promise.resolve( data )
        });
     
}

export function getCooks(){
    
    return fetch('./cooks.json')
        .then(res => res.json())
        .then (data => {
            return Promise.resolve( data )
        });
     
}