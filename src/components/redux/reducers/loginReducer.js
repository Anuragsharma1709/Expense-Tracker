export const initialState = {
    login: localStorage.getItem("loginInfo"), 
    user: null
}

export const reducer = (state = initialState, action) => {
    console.log(action.type)
    if (action.type === 'user_login') {
        return action.payload;
    }
    return state;

}