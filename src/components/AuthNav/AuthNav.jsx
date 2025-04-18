import { NavLink } from "react-router-dom";
import styles from '../../components/AuthNav/AuthNav.module.css';


export default function AuthNav() {
    return (
        <div>
            <NavLink className={styles.link} to="/register">
                Register
            </NavLink>
            <NavLink className={styles.link} to="/login">
                Log In
            </NavLink>
        </div>
    );
}