import { useDispatch, useSelector } from 'react-redux';
import styles from '../UserMenu/UserMenu.module.css'
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.username}>Welcome, {user.name} !</p>
            <button type="button" onClick={handleLogOut}>Logout</button>
        </div>
    );
}