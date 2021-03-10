import React, {Component} from 'react';
import './App.css';
import List from '../src/components/List/List'

class App extends Component {
  state = {
      todo: [
          {
              id: "14",
              title: "Costa Rican Colon North Carolina parsing",
              completed: true
          },
          {
              id: "16",
              title: "Industrial indexing context-sensitive",
              completed: false
          },
          {
              id: "18",
              title: "North Korean Won",
              completed: false
          },
          {
              id: "19",
              title: "Wooden Indiana",
              completed: true
          },
          {
              id: "20",
              title: "Assistant actuating implement",
              completed: false
          }
      ]
  };
  render() {
    return (
        <div className="App">
            <List list={this.state.todo} />
        </div>
    );
  }
}

export default App;
