export const initialState = {
    spoken: false,
    user: null
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
        default:
            return {...state}
    }
}

export default reducer;