import { auth } from 'firebase';
import { getUserByUid, } from '../api/Api2'

// ACTION NAMES
const ADD ="USER/ADD";
const REMOVE = "USER/REMOVE";
const CHECKAUTCH = "USER/CHECKAUTH";
const CHECKSTART = "USER/CHECKSTART";
const CHECKERROR = "USER/CHECKERROR"; 

//initial state

const initialState = {
    userId:null,
    user:{},
    isLoading: false,
    error:null,
}


//redusers
export default function(state = initialState, action){
    switch(action.type){
        case ADD:
            return {...state, user: action.payload, userId: action.payload.id}
        case REMOVE:
            return initialState
        case CHECKAUTCH:
            return {
                ...state,
                user: action.payload, 
                userId: action.payload.id,
                isLoading: false,
            }   
        case CHECKSTART:
            return {...state, isLoading: true }
        case CHECKERROR:
            return {...state, isLoading: false, error: action.payload}
        default: 
            return state
    }
}



//action creators
export const checkUserAuthInFirebase = () => (dispatch) =>{
    dispatch({type: CHECKSTART});

    auth().onAuthStateChanged(user => {
        if(user){
            getUserByUid(user.uid)
                .then((dataUser)=>{
                    dispatch({ type: CHECKAUTCH, payload: dataUser});
                }).catch((error)=> dispatch({type: CHECKERROR, payload: error }))
        }
    })
}

export const setUserToStore = (user) => ({ type: ADD, payload: user });
export const clearUserInStore = () =>({ type: REMOVE });