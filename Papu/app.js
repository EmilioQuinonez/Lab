const express = require("express"); // Importa express
const app = express(); // Llamar express de forma más rápida
const bodyParser = require("body-parser"); // Importa body-parser
const path = require("path"); // Permite usar direcciones del sistema

const session = require("express-session");
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

// Middleware de sesión
app.use(
  session({
    secret: "mi string secreto que debe ser un string aleatorio muy largo, no como éste",
    resave: false, // La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false // Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

// Middleware para parsear cookies (debe ir antes de csurf)
app.use(cookieParser());

// Middleware para leer el cuerpo de las solicitudes (POST)
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware CSRF (después de cookieParser)
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

app.set("view engine", "ejs"); // Establece ejs como su motor de plantillas
app.set("views", "views"); // Establece el directorio donde express buscará los archivos de las vistas

// Le dice que va a usar la carpeta public como carpeta estática
app.use(express.static(path.join(__dirname, "public")));

const mainRoutes = require("./routes/main.routes.js");
app.use("/", mainRoutes);

const sistemRoutes = require("./routes/sistem.routes.js");
app.use("/sistems", sistemRoutes);

const logRoutes = require("./routes/log.routes.js");
app.use("/log", logRoutes);

const errorRoutes = require("./routes/error.routes.js");
app.use(errorRoutes);

app.listen(3000);