class ContactController {
  index(request, response) {
    // lista todos os registros
    response.send("Enviado direto do Controller");
  }

  show() {
    // obter UM registro
  }

  store() {
    // Criar UM registro
  }

  update() {
    // Editar UM registro
  }

  delete() {
    // deletar UM registro
  }
}

module.exports = new ContactController();
