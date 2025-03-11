const { Cookie } = require("express-session");
const Sistem = require("../models/sistem.model");
const moment = require("moment");

exports.get_sistem = (req, res, next) => {
  const datosLog = {
    loggedState: req.session.isLoggedIn || false,
    lastId: req.session.insertId || -1,
    username: req.session.username || "",
  };

  res.render("sistems", {
    datosLog: datosLog,
  });
};

exports.get_sistem_add = (req, res, next) => {
  const datosLog = {
    loggedState: req.session.isLoggedIn || false,
    lastId: req.session.insertId || -1,
    username: req.session.username || "",
  };

  res.render("add_sistem", {
    datosLog: datosLog,
  });
};

exports.post_sistem_add = (req, res, next) => {
  const datosLog = {
    loggedState: req.session.isLoggedIn || false,
    lastId: req.session.insertId || -1,
    username: req.session.username || "",
  };

  const mi_Sistem = new Sistem(datosLog.username, req.body.sistem); // Creo la clase con los datos del form

  mi_Sistem
    .save()
    .then(([result]) => {
      req.session.insertId = result.insertId;
      res.redirect("/sistems/list");
    })
    .catch((err) => console.log(err));
};

exports.get_sistem_list = (req, res, next) => {
  const datosLog = {
    loggedState: req.session.isLoggedIn || false,
    lastId: req.session.insertId || -1,
    username: req.session.username || "",
  };

  // Manda a mostrar las personas que han votado por alguna sistem

  Sistem.fetchAll() // Obtiene la query de la base de datos
    .then(([rows, list_sistem]) => {
      // Si la query es exitosa, manda a renerizarla con los datos de su row
      res.render("list_sistem", {
        entrevistas: rows,
        datosLog: datosLog,
      });
    })
    .catch((err) => console.log(err));
};

exports.get_sistem_id = (req, res, next) => {
  const sistem = req.params.sistem;

  const datosLog = {
    loggedState: req.session.isLoggedIn || false,
    lastId: req.session.insertId || -1,
    username: req.session.username || "",
  };

  Sistem.fetchBySistem(sistem)
    .then(([rows, list_sistem]) => {
      for (let i = 0; i < rows.length; i++) {
        rows[i].createdAt = moment(new Date(rows[i].createdAt)).format(
          "ddd, MMM DD, YYYY"
        );
      }

      res.render("oneSistem", {
        entrevistas: rows,
        datosLog: datosLog,
        sistem: sistem,
      });
    })
    .catch((err) => console.log(err));
};
