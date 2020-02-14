
const SNACKSTART = 'SNACKBAR/START';
const SNACKSTOP = 'SNACKBAR/STOP';

const initialState = {
    open : false,
    snackOptions:{
        message: '', 
        backColor:'',
    }
}

export default function(state = initialState, action){
    switch (action.type){
        case SNACKSTART:
            return {
                    ...state, 
                    open: true,
                    snackOptions:{
                        message: action.payload.message,
                        backColor: action.payload.backColor,
                    }
                }
        case SNACKSTOP:
            return {...state, open: false}
        default:
            return state
    }
}


export const startSnack = (message, backColor) => ({
    type: SNACKSTART,
    payload: {
        message: message,
        backColor: backColor,
    }
});

export const stopSnack = () => ({type: SNACKSTOP});