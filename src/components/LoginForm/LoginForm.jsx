import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { logIn } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values)).unwrap().then(() => console.log('Login success'));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form} autoComplete="off">
                <label className={css.label}>
                    Email
                    <Field type="email" name="email" />
                </label>
                <label className={styles.label}>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    );
}