
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import styles from '../App/App.module.css'
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute'


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));


const App = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => { dispatch(refreshUser()) }, [dispatch])


  return isRefreshing ? (<strong>Getting user data, please wait...</strong>
  ) : (

    <Layout>
      <Suspense fullback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts" />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
        </Routes>
      </Suspense>
    </Layout>

  );
};

export default App;
