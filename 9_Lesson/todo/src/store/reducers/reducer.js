import { ACTION_ADD_TODO, ACTION_TOGGLE_TODO, ACTION_DELETE_TODO } from '../actions/actions';

const INITIAL_STATE = {
    list: [
        {id: 1, title: 'First todo', completed: false},
        {id: 2, title: 'Second todo', completed: false}
    ],
}
export default function reducer( state = INITIAL_STATE, {type, payload}) {
    switch (type){
        case ACTION_ADD_TODO:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: state.list.length + 1,
                        title: payload.title,
                        completed: false
                    }
                ]
            }
        case ACTION_TOGGLE_TODO:
            return {
                ...state,
                list: state.list.map(todo => todo.id === payload ? {...todo, completed: !todo.completed} : todo)
            }
        case ACTION_DELETE_TODO:
            return {
                ...state,
                list: state.list.filter(todo => todo.id !== payload)
            }
        default:
            return state;
    }
};
