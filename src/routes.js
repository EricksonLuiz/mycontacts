
const { Router } = require("express"); // importa o express
const ContactController = require("./app/controllers/ContactController"); // importa o controller
const CategoryController = require("./app/controllers/CategoryController")// importa o controller
const router = Router(); // define a variável com o parametro do express


router.get("/contacts", ContactController.index);  //Rota para listar todos os registros de contato
router.get("/contacts/:id", ContactController.show);  //Rota para listar um registro específico 
router.delete("/contacts/:id", ContactController.delete);  //Rota para deletar um registro específico 
router.post("/contacts", ContactController.store);  //Rota para adicionar um registro
router.put("/contacts/:id", ContactController.update);  //Rota para alterar um registro específico 


router.get("/categories", CategoryController.index)
router.post("/categories", CategoryController.store)
module.exports = router;
