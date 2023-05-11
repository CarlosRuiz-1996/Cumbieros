'use strict';

const db = require('@config/db');

let User = function (user) {
    this.id = user.id;
    this.nombre = user.nombre;
    this.apellidoP = user.apellidoP;
    this.apellidoM = user.apellidoM;
    this.usuario = user.usuario;
    this.correo = user.correo;
    this.password = user.password;
    this.rol = user.rol;
    this.telefono = user.telefono;
    this.fecha_nacimiento = user.fecha_nacimiento;
    this.direccion = user.direccion;
    this.fecha_alta = user.fecha_alta ?? new Date();
    this.fecha_cambio = new Date();
};

User.getById = ({id}, result) => {
    const callback = (error, response) => (error)
        ? result(error, null)
        : result(null, response[0]);

    db.query('SELECT * FROM users WHERE id_usuario = ?', id, callback);
}

User.getAll = (result) => {
    const callback = (error, response) => (error)
        ? result(error, null)
        : result(null, response);

    db.query('SELECT * FROM users', callback);
}

User.store = (newUser, result) => {
    const callback = (error, response) => (error) 
        ? result(error, null)
        : result(null, response.insertId);

    db.query('INSERT INTO users set ?', newUser, callback);
}

User.update = ({ id, title, description }, result) => {
    const callback = (error, response) => (error)
        ? result(error, null)
        : result(null, null);

    db.query(
        'UPDATE users SET title = ?, description = ? WHERE id = ?', 
        [title, description, id], 
        callback
    );
}

User.delete = (id, result) => {
    const callback =  (error, response) => (error)
        ? result(error, null)
        : result(null, response);

    db.query('DELETE FROM users WHERE id = ?', [id], callback);
}

module.exports = User;