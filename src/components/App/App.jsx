
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from '../App/App.module.css'
import { AppBar } from '../AppBar/AppBar';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));


const App = () => {
  return (
    <AppBar>
      <Suspense fullback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </AppBar>

  );
};

export default App;


// const handleAddContact = (newContact) => {
//   dispatch(addContact(newContact));
// };

// const handleDeleteContact = (contactId) => {
//   dispatch(deleteContact(contactId));
// };

// const handleFilterChange = (value) => {
//   dispatch(changeFilter(value));
// };

// const filteredContacts = contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
