const express = require("express");
const path = require("path"); // Agrega esta línea para importar el módulo path
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("index.html");
});

app.get("/funcional", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "funcional.html"));
});

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contacto.html"));
});

app.listen(PORT, () =>
  console.log(`Server listening on port: http://localhost:${PORT}`)
);
