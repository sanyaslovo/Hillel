import { USERS_URL } from '../../common/constants.js';
import { useDataBase } from '../../common/hooks/hooks';
import UserItem from './UserItem/UserItem';
import './Users.css';

export default function Users() {
    const { items } = useDataBase(USERS_URL);
    return (
        <div className="users">
            { items.map(item => <UserItem item={ item } key={ item.id } />) }
        </div>
    )
}
