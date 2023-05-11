'use strict';

const db = require('@config/db');

let Login = function (user) {
   
    this.usuario = user.usuario;
    this.password = user.password;
    // this.rol = user.rol;
    // this.telefono = user.telefono;
    // this.fecha_nacimiento = user.fecha_nacimiento;
    // this.direccion = user.direccion;
    // this.fecha_alta = user.fecha_alta ?? new Date();
    // this.fecha_cambio = new Date();
};


Login.store = (newLogin, result) => {
   
        const callback = (error, response) => (error)
        ? result(error, 'fallo')
        : result(null, response[0]);

        
    db.query('SELECT * FROM users WHERE correo ="'+newLogin.usuario+'" AND password ="'+newLogin.password+'"', callback);
}

module.exports = Login;