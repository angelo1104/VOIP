export const initialState = {
    spoken: false
}

const reducer = (state,action)=>{
    switch (action.type) {
        case 'SET_SPOKEN':
            return {
                ...state,
                spoken: action.spoken
            }
        default:
            return {...state}
    }
}

export default reducer;