const { Router } = require("express"); // importa o express

const router = Router(); // define a variável com o valor do express

const ContactController = require("./app/controllers/ContactController"); // importa o controller

router.get("/contacts", ContactController.index); // passa o get pela rota e usa o index de dentro do controller.
router.get("/contacts/id:", ContactController.show);
module.exports = router;
