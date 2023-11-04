const path = require("node:path");
const fs = require("fs").promises;

const contactsPath = path.join( "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => {
      console.log(JSON.parse(data.toString()));
      return data.toString();
    })
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then((contacts) => {
      const contactList = JSON.parse(contacts.toString());
      const foundContact = contactList.find(
        (contact) => contact.id === contactId
      );
      if (!foundContact) {
        throw new Error("Contact not found");
      }
      console.log(foundContact);
      return foundContact;
    })
    .catch((error) => {
      console.error("Error while fetching contact by ID:", error);
      throw error;
    });
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data.toString());
      const updatedContacts = contacts.filter(
        (contact) => contact.id !== contactId
      );
      return fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    })
    .catch((error) => {
      console.error("Error while deleting contact by ID:", error);
      throw error;
    });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data.toString());
      const newContact = {
        id: contacts.length + contacts.length + 3,
        name,
        email,
        phone,
      };
      contacts.push(newContact);
      return fs.writeFile(contactsPath, JSON.stringify(contacts));
    })
    .catch((error) => {
      console.error("Error while adding new contact", error);
      throw error;
    });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
