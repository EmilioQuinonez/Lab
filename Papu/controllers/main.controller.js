exports.get = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        privilegios: req.session.privilegios || [],
    }

    res.render('main', { ...datosLog });
}


exports.get_questions = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        privilegios: req.session.privilegios || [],
    }

    res.render('questions', { ...datosLog });
}

exports.get_about = (req, res, next) => {
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        lastId: req.session.insertId || -1,
        username: req.session.username || "",
        privilegios: req.session.privilegios || [],
    }

    res.render('about', { ...datosLog });
}