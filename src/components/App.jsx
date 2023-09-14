import { Component } from 'react';
import { GlobalStyle } from 'helpers/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '067-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38 (050) 443 89 12' },
      { id: 'id-3', name: 'Eden Clements', number: '(093)-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '0972279126' },
    ],
    filter: '',
  };

  addNewContact = newContact => {
    this.isContactExist(newContact);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  isContactExist = ({ name }) => {
    const { contacts } = this.state;

    const normalizedName = name.toLowerCase();

    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <section>
        <GlobalStyle />
        <ContactForm onSaveContact={this.addNewContact} />
        <Contacts
          contacts={filteredContacts}
          value={this.state.filter}
          onChange={this.changeFilter}
          onDelete={this.deleteContact}
        />
      </section>
    );
  }
}
