
const { Router } = require("express"); // importa o express
const ContactController = require("./app/controllers/ContactController"); // importa o controller
const router = Router(); // define a variável com o valor do express


router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);

module.exports = router;
