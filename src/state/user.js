// ACTION NAMES
const ADD ="USER/ADD"
const REMOVE = "USER/REMOVE"

//initial state

const initialState = {
    userId:null,
    user:{},
}


//redusers
export default function(state = initialState, action){
    switch(action.type){
        case ADD:
            return {...state, user: action.payload, userId: action.payload.id}
        case REMOVE:
            return initialState
        default: 
            return state
    }
}



//action creators

export const setUserToStore = (user) => ({ type: ADD, payload: user });
export const clearUserInStore = () =>({ type: REMOVE });