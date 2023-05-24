const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Teste");
});

app.listen(3001, () =>
  console.log("Servidor rodando na http://localhost/3001")
);
