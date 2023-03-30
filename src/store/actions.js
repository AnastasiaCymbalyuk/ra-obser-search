import {
    CHANGE_SEARCH,
    SEARCH_SETING_REQUEST,
    SEARCH_SETING_FAILURE,
    SEARCH_SETING_SUCCESS,
    RESET_SEARCH,
} from './actionTypes';
  
  
export const searchSetingRequest = search => ({
    type: SEARCH_SETING_REQUEST,
    payload: {search},
});
  
export const searchSetingFailure = error => ({
    type: SEARCH_SETING_FAILURE,
    payload: {error},
});
  
export const searchSetingSuccess = items => ({
    type: SEARCH_SETING_SUCCESS,
    payload: {items},
});
  
export const changeSearch = search => ({
    type: CHANGE_SEARCH,
    payload: {search},
});

export const resetSearch = () => ({
    type: RESET_SEARCH,
});