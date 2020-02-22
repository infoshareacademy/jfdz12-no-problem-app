import { auth } from 'firebase';
import { getUserByUid, } from '../api/Api2'

// ACTION NAMES
const ADD ="USER/ADD";
const REMOVE = "USER/REMOVE";
const CHECKAUTH = "USER/CHECKAUTH";
const CHECKEND = "USER/CHECKEND";
const CHECKSTART = "USER/CHECKSTART";
const CHECKERROR = "USER/CHECKERROR"; 

//initial state

const initialState = {
    userId:null,
    user:{},
    isLoading: true,
    error:null,
}


//redusers
export default function(state = initialState, action){
    switch(action.type){
        case ADD:
            return {...state, user: action.payload, userId: action.payload.id}
        case REMOVE:
            return initialState
        case CHECKAUTH:
            return {
                ...state,
                user: action.payload, 
                userId: action.payload.id,
                isLoading: false,
            }   
        case CHECKSTART:
            return {...state, isLoading: true }
        case CHECKEND:
                return {...state, isLoading: false }
        case CHECKERROR:
            return {...state, isLoading: false, error: action.payload}
        default: 
            return state
    }
}



//action creators
export const checkUserAuthInFirebase = () => (dispatch) =>{

    auth().onAuthStateChanged(user => {
        if(user){
            getUserByUid(user.uid)
                .then((dataUser)=>{
                    dispatch({ type: CHECKAUTH, payload: dataUser});
                }).catch((error)=> dispatch({type: CHECKERROR, payload: error }))
        }else{ dispatch({ type: CHECKEND })}
    })
}

export const setUserToStore = (user) => ({ type: ADD, payload: user });
export const clearUserInStore = () =>({ type: REMOVE });