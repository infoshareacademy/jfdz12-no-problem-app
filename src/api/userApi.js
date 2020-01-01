export function getUser(){
    
    return fetch('./users.json')
        .then(res => res.json())
        .then (data => {
            const users = data;
            return Promise.resolve( users )
        });
     
}