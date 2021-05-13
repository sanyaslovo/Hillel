import {
    ACTION_SET_TODOS,
    ACTION_TOGGLE_TODO,
    ACTION_DELETE_TODO,
    ACTION_SAVE_TODO
} from '../actions/actions';

const INITIAL_STATE = {
    todos: [],
}
export default function reducer( state = INITIAL_STATE, { type, payload }) {
    switch (type){
        case ACTION_SET_TODOS: return { todos: payload }
        case ACTION_TOGGLE_TODO: return {
            ...state,
            todos: state.todos.map(todo => todo.id === payload.id ? {...todo, isDone: !todo.isDone} : todo)
        }
        case ACTION_DELETE_TODO:
            console.log(state)
            return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== payload.id)
        }
        case ACTION_SAVE_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]}
        default: return state;
    }
};
