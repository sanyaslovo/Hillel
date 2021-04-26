export const ACTION_ADD_TODO = 'ACTION_ADD_TODO';
export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';
export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';

export function addTodoAction(newTodo) {
    return { type: ACTION_ADD_TODO, payload: newTodo };
}
export function toggleTodoAction(id) {
    return { type: ACTION_TOGGLE_TODO, payload: id };
}
export function deleteTodoAction(id) {
    return { type: ACTION_DELETE_TODO, payload: id };
}
