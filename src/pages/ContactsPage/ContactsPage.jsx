import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from '../../components/PageTitle/PageTitle';
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactForm from '../../components/ContactForm/ContactForm'
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";

export default function ContactPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <PageTitle>Phone contacts</PageTitle>
            <ContactForm />
            <SearchBox />
            <div>{isLoading && "Request in progress..."}</div>
            <ContactList />
        </>
    );
}