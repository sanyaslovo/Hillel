import React, {Component} from 'react';
import './Task.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.todo.completed,
        };
    }
    toggleChange = () => {
        this.setState({
            completed: !this.state.completed,
        });
    }
    render() {
        return (
            <li id={this.props.todo.id} className={this.state.completed ? 'completed' : ''}>
                <label>
                    <input
                       type="checkbox"
                       defaultChecked={this.state.completed}
                       onChange={this.toggleChange}/>
                    {this.props.todo.title}
                </label>
            </li>
        );
    }
}

export default Task;
