import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.userList}>
      {Array.isArray(filterContacts) &&
        filterContacts.map((contact) => {
          return (
            <li className={css.userItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
