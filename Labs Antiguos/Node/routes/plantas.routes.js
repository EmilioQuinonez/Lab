// Dirigir al usuario a una pagina web
const express = require("express");
const router = express.Router();
const path = require("path");

const html_header = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina de plantas</title>
  </head>
  <body>
    <h1>Las grandes plantas</h1>
    <p>Me gustan las plantas</p>
    <img width="200px" src="https://centrodejardineriagorbeia.com/wp-content/uploads/2021/09/pexels-cottonbro-5858235-scaled-e1631960164233-1024x1010.jpg">`;

const html_peligroso = `<img width="200px" src="https://cdn.atriumhealth.org/-/media/nc-poison-center/images/gladiola.jpg?h=225&w=151&rev=63b4dc740db64592b1e080fec68cef39&hash=05BD3FDE4CB405BACEBA2BCD2700893E">
    <form action="/peligro/add" method="POST">
      <label for="nomPeligrosa">Nombre de la planta peligrosa</label>
      <input id="nomPeligrosa" type="text" placeholder="Amarylis" name="nomPeligrosa">
      <input type="submit" value="Enviar">
    </form>
</body>`;
//Lo que hace el for de label es que al hacer click te manda al input correspondiente
//la etiqueta name hace que al mandar los datos a un servidor lleguen con ese valor, generalmente se pone name e id iguales

const html_favorita = `<img width="200px" src="https://static.wixstatic.com/media/58f6c7_989eb075ad654cf48707de7a89092c5b~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85/tulipan.jfif">
    <form action="/favorita/add" method="POST">
      <label for="nomFavorita">Nombre de una planta favorita</label>
      <input id="nomFavorita" type="text" placeholder="tulipanes" name="nomFavorita">
      <input type="submit" value="Enviar">
    </form>
</body>`;

const html_footer = `<footer>
Pagina realizada por un amante de las plantas;
</footer>
</html>`;

const plantas_peligrosas = [];
const plantas_favoritas = [];

router.get(["/peligro/add", "/peligro"], (request, response, next) => {
  res.send(html_header + html_peligroso + html_footer);
});

router.post(["/peligro/add", "/peligro"], (request, response, next) => {
  const nom_planta = request.body.nomPeligrosa;

  if (nom_planta) {
    plantas_peligrosas.push(nom_planta);
  }

  let html = html_header;
  for (const planta of plantas_peligrosas) {
    html += `<div>${planta}</div>`;
  }
  html += html_footer;

  response.send(html);
});

router.get(["/favorita/add", "/favorita"], (request, response, next) => {
  res.send(html_header + html_favorita + html_footer);
});

router.post(["/favorita/add", "/favorita"], (request, response, next) => {
  const nom_planta = request.body.nomFavorita;

  if (nom_planta) {
    plantas_favoritas.push(nom_planta);
  }

  let html = html_header;
  for (const planta of plantas_favoritas) {
    html += `<div>${planta}</div>`;
  }
  html += html_footer;

  response.send(html);
});

module.exports = router;
