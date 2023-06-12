const { v4 } = require("uuid");

// Lista de contatos pré setados
let contacts = [
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
  findAll() {                           // função para listar todos os contatos
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {                        // função para verificar registro pelo ID
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.id == id))
    );
  }

  findByEmail(email) {                  // função para verificar registro pelo EMAIL
    return new Promise((resolve) =>
      resolve(contacts.find((contact) => contact.email == email))
    );
  }

  delete(id){                           // função para filtrar ID específico
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve();
    });
  }


  create({ name, email, phone, category_id, }){   // função para criar novo registro
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, { name, email, phone, category_id, }){   // função para alterar registro pelo ID
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact: contact
      ));
      
      resolve(updateContact);
    });
  }
}

module.exports = new ContactsRepository();
