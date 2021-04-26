export function addTodoAction(newTodo) {
    return { type: 'add', payload: newTodo };
}
export function toggleTodoAction(id) {
    return { type: 'toggle', payload: id };
}
export function deleteTodoAction(id) {
    return { type: 'delete', payload: id };
}
