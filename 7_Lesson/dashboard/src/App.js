import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './components/Users/Users';
import Albums from './components/Albums/Albums';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
