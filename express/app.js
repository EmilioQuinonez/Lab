const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const pantasRoutes = require();

//(app.get es para resgistrar un middleware para peticiones http get)
app.get("/plantas/agregar", (request, response, next) => {
  response.send(html_header + html_form + html_footer);
});

app.post("/plantas/agregar", (request, response, next) => {
  console.log(request.body);
  response.send(html_header + html_form + html_footer);
});

app.use((request, response, next) => {
  console.log("Otro middleware!");
  response.send("¡Hola mundo!"); //Manda la respuesta
});

app.listen(3000);
