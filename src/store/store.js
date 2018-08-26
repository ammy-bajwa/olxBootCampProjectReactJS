import { createStore } from 'redux';



const storeInitialState = {
    user: null,
    auth: false,
    adAuthor: null,
}
let store = createStore((state = storeInitialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                auth: true
            }
        case 'LOG_OUT':
            return {
                ...state,
                auth: false
            }
        case 'USER':
            return {
                ...state,
                user: action.user
            }
        case 'AUTHOR':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
})


export default store;