const ContactsRepository = require("../repositories/ContactsRepository");
class ContactController {
  async index(request, response) {
    // lista todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // obter UM registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "Usuário não encontrado." });
    }

    response.json(contact);
  }

  async store(request, response) {
    // Criar UM registro
    const { name, email, phone, category_id } = request.body;

    if(!name){
      return response.status(400).json({error: "Nome não enviado!"})
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if(contactExists){
      return response.status(400).json({error: "Email já cadastrado!"})
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    })

    response.json(contact);
  }
  
  async update(request, response) {
    // Editar UM registro
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body; 

    const contactExists = await ContactsRepository.findById(id);
    if(!contactExists){
      return response.status(400).json({error: "Nome não enviado!"})
    }
    
    if(!name){
      return response.status(400).json({error: "Nome não enviado!"})
    }
    
    const contactByEmail = await ContactsRepository.findByEmail(email);
    if(contactByEmail && contactByEmail.id !== id){
      return response.status(400).json({error: "Email já cadastrado!"})
    }

    const contact = await ContactsRepository.update(id,{ name, email, phone, category_id, });

    response.json(contact);
  }

  async delete(request, response) {
    // deletar UM registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    
    if (!contact) {
      return response.status(404).json({ error: "Usuário não encontrado." });
    }

    await ContactsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ContactController();
