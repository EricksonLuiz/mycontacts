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

  store(request, response) {
    // Criar UM registro
    response.send("Enviado direto do Controller");
  }

  update(request, response) {
    // Editar UM registro
    response.send("Enviado direto do Controller");
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
