// Dirigir al usuario a una pagina web
const http = require("http");
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
const server = http.createServer((req, res) => {
  if (
    req.method == "GET" &&
    (req.url == "/peligro/add" || req.url == "/peligro")
  ) {
    console.log(req.url);
    res.setHeader("Content-Type", "text/html");
    res.write(html_header + html_peligroso + html_footer);
    res.end();
  } else if (req.method == "POST" && req.url == "/peligro/add") {
    const datos_completos = [];

    req.on("data", (data) => {
      console.log(data);
      datos_completos.push(data);
    });

    req.on("end", () => {
      const string_datos_completos = Buffer.concat(datos_completos).toString();
      const nom_planta = string_datos_completos.split("=")[1];
      console.log(nom_planta);

      plantas_peligrosas.push(nom_planta);
      res.setHeader("Content-Type", "text/html");
      res.write(html_header);

      for (const planta of plantas_peligrosas) {
        res.write(`<div>`);
        res.write(planta);
        res.write(`</div>`);
      }
      res.write(html_footer);
      res.end();
    });
  } else if (
    (req.method == "GET" && req.url == "/favorita/add") ||
    req.url == "/favorita"
  ) {
    res.setHeader("Content-Type", "text/html");
    res.write(html_header + html_favorita + html_footer);
    res.end();
  } else if (req.method == "POST" && req.url == "/favorita/add") {
    const datos_completos = [];

    req.on("data", (data) => {
      datos_completos.push(data);
    });

    req.on("end", () => {
      const string_datos_completos = Buffer.concat(datos_completos).toString();
      const nom_planta = string_datos_completos.split("=")[1];
      console.log(nom_planta);

      plantas_favoritas.push(nom_planta);
      res.setHeader("Content-Type", "text/html");
      res.write(html_header);

      for (const planta of plantas_favoritas) {
        res.write(`<div>`);
        res.write(planta);
        res.write(`</div>`);
      }
      res.write(html_footer);
      res.end();
    });
  } else if (req.method == "GET" && req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(html_header + html_footer);
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(html_header);
    res.write(`<h1>Error 404, la ruta no existe</h1>`);
    res.write(
      `<img width="400px" src="https://cdn-icons-png.flaticon.com/512/10809/10809585.png">`
    );
    res.write(html_footer);
    res.end();
  }
});

server.listen(3000);
