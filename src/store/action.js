export const loginUser = () => {
    return {
        type:'LOG_IN'
    }
}
export const logout = () => {
    return {
        type:'LOG_OUT'
    }
}
export const userHandler = (user) => {
    return {
        type:'USER',
        user
    }
}
export const adAuthor = (user) => {
    return {
        type:'AUTHOR',
        user
    }
}
