import { NavLink } from "react-router-dom";
import styles from '../Navigation/Navigation.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {

    const isLoggedIn = useSelector(selectIsLoggedIn)


    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>


            {isLoggedIn && (

                <NavLink to="/contacts">
                    Contacts
                </NavLink>)}

        </nav>
    );
}