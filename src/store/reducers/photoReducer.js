const initialState = {
    data: {},
    isLoading:false
}

export const photoReducer = (state = initialState,action) => {
    switch (action.type) {
        case "GET_PHOTO_REQUEST":
            return {
                ...state,
                isLoading: true
            };
        case "GET_PHOTO_SUCCESS":
            return {
                ...state,
                data : action.payload,
                isLoading: false,
            };
        case "GET_PHOTO_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}