import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './modules/common/components/Header';
import NotFound from './modules/common/components/NotFound';
import Albums from './modules/albums/components/Albums';
import Dashboard from './modules/dashboard/components/Dashboard';
import Users from './modules/users/components/Users';
import Form from "./modules/users/components/UserForm/UserForm";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/albums" component={Albums} />
                <Route path="/users" exact component={Users} />
                <Route path="/users/:id" exact component={Form}/>
                <Route path="/add" exact component={Form}/>
                <Route path="/notfound" component={NotFound} />
                <Route path="/" exact>
                    <Redirect to="/dashboard" />
                </Route>
                <Route path="*">
                    <Redirect to="/notfound" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
