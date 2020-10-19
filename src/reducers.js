export const initialState = {
    spoken: false,
    user: null,
    message:{}
}

const reducer = (state,action)=>{
    switch (action.type) {
        case 'SET_SPOKEN':
            return {
                ...state,
                spoken: action.spoken
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.message[0]
            }
        default:
            return {...state}
    }
}

export default reducer;