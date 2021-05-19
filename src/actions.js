import {getApi} from "./utils/apiServices";
import {
    CHANGE_SEARCH_FIELD,
    CHANGE_ROBOTS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({
        type: REQUEST_ROBOTS_PENDING
    });
    getApi('https://jsonplaceholder.typicode.com/users')
    .then(users => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload :error}))
}

export const setRobots = (robots) => ({
    type: CHANGE_ROBOTS,
    payload: robots
})