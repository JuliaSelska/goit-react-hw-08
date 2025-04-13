import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import styles from '../RegistrationForm/RegistrationForm.module.css';

export default function RegistrationForm() {

    const dispatch = useDispatch();

    const handleSubmit = (values, action) => {
        dispatch(register(values));
        action.resetForm();
    };


    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form} autoComplete="off">
                <label className={styles.label}>
                    Username
                    <Field type="text" name="name" />
                </label>
                <label className={styles.label}>
                    Email
                    <Field type="email" name="email" />
                </label>
                <label className={styles.label}>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}