const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const plantasRoutes = require("./routes/plantas.routes");
app.use("/", plantasRoutes);

const labRoutes = require("./routes/lab.routes");
app.use("/", labRoutes);

//../Lab 06/style.css
//../Lab 06/script
app.use((require, response) => {
  response.status(404).send("Error 404 pagina no encontrada.");
});

app.listen(3000);
