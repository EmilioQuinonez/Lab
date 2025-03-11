const db = require("../util/database");

module.exports = class Sistem {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(nombrePersona, nombreSistem, idValue = null) {
    this.username = nombrePersona;
    this.sistem = nombreSistem;
    this.id = idValue;
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute(
      "INSERT INTO encuesta(sistem, username) values( ? , ? )",
      [this.sistem, this.username]
    ); // Aunque sea string, no se tiene que especificar comillas. También evita SQL inyections
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return db.execute(`SELECT * FROM encuesta`);
  }

  static fetchBySistem(sistem) {
    return db.execute(
      "SELECT username, createdAt FROM encuesta WHERE sistem = ?",
      [sistem]
    );
  }

  static fetchById(id) {
    return db.execute("SELECT sistem FROM encuesta WHERE id = ?", [id]);
  }
};
