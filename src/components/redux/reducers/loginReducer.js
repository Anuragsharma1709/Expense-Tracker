
const info = JSON.parse(localStorage.getItem('loginInfo'))
const userInfo = JSON.parse(localStorage.getItem('userInfo'))
console.log(userInfo)
export const initialState = {
    login: info, 
    user: userInfo
}

export const reducer = (state = initialState, action) => {
    if (action.type === 'user_login') {
        return action.payload;
    }
    return state;

}