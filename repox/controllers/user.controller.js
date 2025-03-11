exports.get_login = (req, res, next) => {
  const datosLog = {
    isLoggedIn: req.session.isLoggedIn || false,
    username: req.session.username || "",
  };

  res.render("login", {
    datosLog: datosLog,
  });
};

exports.post_login = (req, res, next) => {
    req.session.isLoggedIn = true;
    req.session.username = req.body.username;
    res.redirect("/");
};

exports.get_logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
