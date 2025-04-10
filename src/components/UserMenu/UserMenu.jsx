import { useSelector } from 'react-redux';
import styles from '../UserMenu/UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors';

export default function UserMenu() {

    const user = useSelector(selectUser)

    return (
        <div>
            <p>Wellkome {user.name}</p>
            <button type="button">Logout</button>
        </div>
    );
}