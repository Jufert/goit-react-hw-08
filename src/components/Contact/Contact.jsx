import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={css.userData}>
        <div className={css.userName}>
          <FaUser className={css.iconPerson} />
          <p>{contact.name}</p>
        </div>
        <div className={css.userPhone}>
          <FaPhone className={css.iconPhone} />
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Contact;
