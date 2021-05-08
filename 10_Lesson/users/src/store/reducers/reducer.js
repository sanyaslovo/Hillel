import {
    ACTION_SAVE_USER,
    ACTION_DELETE_USER,
    ACTION_SET_USERS
} from '../actions/actions';

const INITIAL_STATE = {
    users: [],
}

export default function reducer( state = INITIAL_STATE, {type, payload}) {
    switch (type){
        case ACTION_SAVE_USER:
            let saveData;
            if(payload.id) saveData = state.users.map((item) => payload.id === item.id ? payload : item)
            else saveData = [...state.users, payload];
            return { ...state, users: saveData }
        case ACTION_DELETE_USER:
            return {
                ...state,
                users: state.users.filter(todo => todo.id !== payload)
            }
        case ACTION_SET_USERS: return { users: payload }
        default:
            return state;
    }
};
