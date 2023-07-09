const express = require("express");
const routes = require("./routes");
require = ('express-async-errors')

const app = express();

app.use(express.json())
app.use(routes);
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3005, () =>
  console.log("Servidoor rodando na http://localhost/3005")
);
