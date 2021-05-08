import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './modules/common/components/Header';
import NotFound from './modules/common/components/NotFound';
import Users from './modules/users/components/Users';
import Form from "./modules/users/components/UserForm";
import store from "./store";
import {fetchUsers} from "./store/actions/actions";
store.dispatch(fetchUsers());
function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/users" exact component={Users} />
                <Route path="/users/:id" exact component={Form}/>
                <Route path="/addUser" exact component={Form}/>
                <Route path="/notfound" component={NotFound} />
                <Route path="/" exact>
                    <Redirect to="/users" />
                </Route>
                <Route path="*">
                    <Redirect to="/notfound" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
