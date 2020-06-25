export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    (each) => each._id !== action.payload
                ),
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            }
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload,
            }
        case 'TRANSACTIONS_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}
