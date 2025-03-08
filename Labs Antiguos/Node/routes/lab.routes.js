// Dirigir al usuario a una pagina web
const express = require("express");
const router = express.Router();
const path = require("path");

const html_calculadora = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../Lab 06/style.css" />
    <script src="../Lab 06/script"></script>
    <title>Validador de contraseñas</title>
  </head>
  <body class="body">
    <div class="div">
      <h2 class="h"><b>Validar Contraseña:</b></h2>
      <div>
        <p class="message">Para tener una contraseña fuerte necesitas:</p>
        <p class="message">- Que tenga minimo 8 caracteres.</p>
        <p class="message">- Que tenga minimo 1 mayúscula.</p>
        <p class="message">- Que tenga minimo 1 minúscula.</p>
        <p class="message">- Que tenga minimo 1 número.</p>
        <p class="message">
          - Que tenga minimo 1 caracter especial. (#, @, &, %, etc.)
        </p>
      </div>
      <label for="password"><b>Contraseña: </b></label>
      <input type="password" id="password" oninput="checkPassword()" />
      <div class="strength-bar" id="div"><div id="strength"></div></div>
      <p id="strengthMessage" class="message"></p>

      <label for="confirmPassword"><b>Confirma contraseña: </b></label>
      <input type="password" id="confirmPassword" oninput="checkMatch()" />
      <p id="matchMessage" class="message"></p>
    </div>
    <div>
      <h2>Describe el archivo package.json.
</h2>
      <p>
        El archivo de package.json sirve para guardar la configuración en un
        formato json, y es el que contiene la información clave sobre el
        proyecto y las dependencias que tiene nuestro proyecto.
      </p>
    </div>
  </body>
</html>`;

router.get("/password", (request, response, next) => {
  response.send(html_calculadora);
});

module.exports = router;
