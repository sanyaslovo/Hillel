import {useState} from "react";
import store from "./store";
import { Provider } from 'react-redux';
import {fetchTodos} from "./store/actions/actions";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Todos from './components/todos/Todos';
import TodoForm from './components/todos/TodoForm';
store.dispatch(fetchTodos());

const App = () => {
    const [ modalOpened, setModalOpened ] = useState(false);
    const toggleModal = () => setModalOpened(!modalOpened);
    return (
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route path="/todo" exact>
                        <Todos
                            toggleModal={toggleModal}
                        />
                    </Route>
                    <Route path="/todo/add" exact>
                        <TodoForm
                            modalOpened={modalOpened}
                            toggleModal={toggleModal}
                        />
                    </Route>
                    <Route path="*" exact>
                        <Redirect to="/todo" />
                    </Route>
                </Switch>
            </Provider>
        </Router>
    )
}

export default App;
