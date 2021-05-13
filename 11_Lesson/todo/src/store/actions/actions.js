import Axios from 'axios';
import { API_URL } from '../../constants';

export const ACTION_SET_TODOS = 'ACTION_SET_TODOS';
export const fetchTodos = () => (dispatch) => {
    Axios.get(API_URL).then(({data}) => dispatch({ type: ACTION_SET_TODOS, payload: data }));
};

export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';
export const toggleTodo = (todo) => (dispatch) => {
    Axios.put(API_URL + todo.id, todo ).then(({ data }) => {
        dispatch({
            type: ACTION_TOGGLE_TODO,
            payload: data
        });
    })
}

export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export const deleteTodo = (id) => (dispatch) => {
    Axios.delete(API_URL + id ).then(({ data }) => {
        dispatch({
            type: ACTION_DELETE_TODO,
            payload: data
        });
    })
}
export const ACTION_SAVE_TODO = 'ACTION_SAVE_TODO';
export const saveTodo = (todo) => (dispatch) => {
    Axios.post(API_URL, todo).then(({ data }) => {
        dispatch({
            type: ACTION_SAVE_TODO,
            payload: data
        });
    })
}
