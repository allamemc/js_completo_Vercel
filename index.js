const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("index.html");
});
app.get("/funcional", (req, res) => {
  res.redirect("funcional.html");
});
app.get("/contacto", (req, res) => {
  res.redirect("contacto.html");
});

app.listen(PORT, () =>
  console.log(`Server listening on port: http://localhost:${PORT}`)
);
