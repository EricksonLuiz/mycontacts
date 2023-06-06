const { v4 } = require("uuid");
const contacts = [
  {
    id: v4(),
    name: "Erickson",
    email: "erickson@email.com",
    phone: "4733333333",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Jose",
    email: "jose@email.com",
    phone: "4733333333",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.id === id))
    );
  }
}

module.exports = new ContactsRepository();
