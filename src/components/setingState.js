import {
    SEARCH_SETING_REQUEST,
    SEARCH_SETING_FAILURE,
    SEARCH_SETING_SUCCESS,
    CHANGE_SEARCH,
    RESET_SEARCH,
} from './actionTypes'
  
const initialState = {
    items: [],
    loading: false,
    error: null,
    search: '',
};
  
  export default function setingReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SETING_REQUEST:
            return {
            ...state,
            loading: true,
            error: null,
            };
        case SEARCH_SETING_FAILURE:
            const {error} = action.payload;
            return {
            ...state,
            loading: false,
            error,
            };
        case SEARCH_SETING_SUCCESS:
            const {items} = action.payload;
            return {
            ...state,
            items,
            loading: false,
            error: null,
            };
        case CHANGE_SEARCH:
            const {search} = action.payload;
            return {
            ...state,
            search
            };
        case RESET_SEARCH:
            return initialState;
        default:
            return state;
    }
}