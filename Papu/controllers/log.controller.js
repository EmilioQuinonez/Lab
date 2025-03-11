const { error } = require('console');
const Usuario = require('../models/log.model');

exports.get_signup = (req, res, next) => {
    const mensaje = req.session.info || '';
    if (req.session.info) {
        req.session.info = '';
    }
    
    const warning = req.session.warning || '';

    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        username: req.session.username || "",
        isNew: true,
        info: mensaje,
        warning: '',
        csrfToken: req.csrfToken(),
    }

    res.render('login', { ...datosLog });
}

exports.post_signup = (req, res, next) => {
    const usuario = new
        Usuario(req.body.username, req.body.password);
    
    usuario.save().then(() => {
        req.session.info = `Tu usuario se ha creado`;
        res.redirect('/log/in');
    }).catch((error) => {
        console.log(error);
    });
}

exports.get_in = (req, res, next) => {
    const mensaje = req.session.info || '';
    if (req.session.info) {
        req.session.info = '';
    }

    const warning = req.session.warning || '';
    if (req.session.warning) {
        req.session.warning = '';
    }
    
    const datosLog = {
        loggedState: req.session.isLoggedIn || false,
        username: req.session.username || "",
        isNew: false,
        info: mensaje,
        warning: warning,
        csrfToken: req.csrfToken(),
    }

    res.render('login', { ...datosLog });
}

exports.post_in = (req, res, next) => {
    Usuario.fetchOne(req.body.username).then(([rows, fieldData]) => {
        if (rows.length > 0) {
            const bcrypt = require('bcryptjs');
            bcrypt.compare(req.body.password, rows[0].password).then((doMatch) => {
                if (doMatch) {
                    req.session.isLoggedIn = true;
                    req.session.username = req.body.username;
                    return req.session.save((error) => {
                        res.redirect('/')
                    });
                }
                else {
                    req.session.warning = `Usuario y/o contraseña incorrectos`;
                    res.redirect('/log/in');
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        else {
            req.session.warning = `Usuario y/o contraseña incorrectos`;
            res.redirect('/log/in');
        }
    }).catch((error) => {
        console.log(error);
    });
}

exports.get_out = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/'); 
    });
}