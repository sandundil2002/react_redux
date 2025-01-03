export const initialState = {
    count: 0,
    toggle: true
}

export const CountReducer = (state= initialState , action:{type:string}) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'TOGGLE':
            return {...state, toggle: !state.toggle}
        default:
            return state
    }
}