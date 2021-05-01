import {
    ACTION_SAVE_USER,
    ACTION_DELETE_USER,
    ACTION_SET_USER
} from '../actions/actions';

const INITIAL_STATE = {
    users: [],
}

export default function reducer( state = INITIAL_STATE, {type, payload}) {
    switch (type){
        case ACTION_SAVE_USER:
            console.log(payload)
            return {
                // ...state,
                // list: [
                //     ...state.list,
                //     {
                //         id: state.list.length + 1,
                //         title: payload.title,
                //         completed: false
                //     }
                // ]
            }
        case ACTION_DELETE_USER:
            return {
                ...state,
                users: state.users.filter(todo => todo.id !== payload)
            }
        case ACTION_SET_USER: return { users: payload }
        default:
            return state;
    }
};
