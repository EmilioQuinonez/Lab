exports.get_login = (req, res, next) => {
  res.render("login.ejs", {
    isLoggedIn: req.session.isLoggedIn || false,
    username: req.session.username || "",
  });
};

exports.post_login = (req, res, next) => {
  req.session.isLoggedIn = true;
  req.session.username = req.body.username;
  res.redirect("/");
};
