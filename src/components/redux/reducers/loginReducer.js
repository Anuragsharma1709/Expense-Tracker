// export const initialState  = null;
export const initialState  = {
    login:null,
    user:null
}

    
export const reducer = (state, action) =>{
    if(action.type === 'user_login'){
            return action.payload;
    }
    return state;

}