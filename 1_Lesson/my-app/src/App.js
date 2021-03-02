import React, {Component} from 'react';
import Header from './components/Header/Header';
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Container/>
                <Footer />
            </div>
        );
    }
}

export default App;
