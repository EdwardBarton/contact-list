import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContactDetail from '../ContactDetail';
import EditContact from '../EditContact';
import PropTypes from 'prop-types';

const Contact = ({routerProps, contacts, editContact, deleteContact}) => {
  // Locates specific contact to pass down to contact components as a prop
  const contact = contacts.find(c => c.id === parseInt(routerProps.match.params.id));

  return (
    <Switch>
      <Route exact path='/contacts/:id' render={routerProps => (
        <ContactDetail routerProps={routerProps} contact={contact} deleteContact={deleteContact} />
      )} />
      <Route path='/contacts/:id/edit' render={routerProps => (
        <EditContact routerProps={routerProps} contact={contact} editContact={editContact} />
      )} />
    </Switch>
  );
};

Contact.propTypes = {
  routerProps: PropTypes.object.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default Contact;