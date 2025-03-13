module.exports = (req, res, next) => {
    for (let privilegios of req.session.privilegios) {
        if (privilegios.nombre == 'agrega') {
            return next();
        }
    }
    return res.status(403).send('No puedes acceder a esta funcionalidad. Perro');
}