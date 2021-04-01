const initialState = {
    data: {},
    isLoading:false
}

export const commentsReducer = (state = initialState,action) => {
    switch (action.type) {
        case "GET_COMMENT_REQUEST":
            return {
                ...state,
                isLoading: true
            };
        case "GET_COMMENT_SUCCESS":
            return {
                ...state,
                data : action.payload,
                isLoading: false,
            };
        case "GET_COMMENT_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}