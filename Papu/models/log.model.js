const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    constructor(mi_username, mi_password) {
        this.username = mi_username;
        this.password = mi_password;
    }

    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                'INSERT INTO usuarios(username, password) VALUES (?, ?)',
                [this.username, password_cifrado]
            );
        }).catch((error) => {
            console.log(error);
        });
    }

    static fetchAll(){
        return db.execute('SELECT * FROM usuarios');
    }

    static fetchOne(username) {
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
    }

    static fetch(username) {
        if (username) {
            return this.fetchOne(username);
        }
        else {
            return this.fetchAll();
        }
    }

}