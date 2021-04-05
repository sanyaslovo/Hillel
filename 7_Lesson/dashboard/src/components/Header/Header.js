import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header>
            <ul>
                <li><NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
                <li><NavLink activeClassName="active" to="/albums">Albums</NavLink></li>
            </ul>
        </header>
    )
}
