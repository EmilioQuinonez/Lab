const Sistem = require("../models/sistem.model");
const moment = require("moment");

exports.get_sistem = (req, res, next) => {
  const datosLog = {
    loggedState: req.session.isLoggedIn || false,
    username: req.session.username || "",
    csrfToken: req.csrfToken(),
  };

  res.render("sistems", { ...datosLog });
};

exports.get_sistem_add = (req, res, next) => {
  const datosLog = {
    loggedState: req.session.isLoggedIn || false,
    username: req.session.username || "",
    csrfToken: req.csrfToken(),
  };

  res.render("add_sistem", { ...datosLog });
};

exports.post_sistem_add = (req, res, next) => {
  const datosLog = {
    loggedState: req.session.isLoggedIn || false,
    username: req.session.username || "",
    csrfToken: req.csrfToken(),
  };

  const mi_Sistem = new Sistem(datosLog.username, req.body.sistem); // Crear la instancia con los datos

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
    username: req.session.username || "",
    csrfToken: req.csrfToken(),
  };

  Sistem.fetchAll()
    .then(([rows, list_sistem]) => {
      res.render("list_sistem", {
        entrevistas: rows,
        ...datosLog,
      });
    })
    .catch((err) => console.log(err));
};

exports.get_sistem_id = (req, res, next) => {
  const sistem = req.params.sistem;

  const datosLog = {
    loggedState: req.session.isLoggedIn || false,
    username: req.session.username || "",
    csrfToken: req.csrfToken(),
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
        sistem: sistem,
        ...datosLog,
      });
    })
    .catch((err) => console.log(err));
};
