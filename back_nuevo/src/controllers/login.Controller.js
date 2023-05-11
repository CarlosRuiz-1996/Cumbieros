'use strict';

const Login = require('@models/login.model');
const { loginHasAllData } = require('@validators/login.validator');


exports.store = async (request, response) => {
    const { body } = request;

    const newLogin = new Login(body);

    const validationSuccess = await loginHasAllData(newLogin);

    if (!validationSuccess)
        return response.status(400).json({ error: true, msj:'datos incorrectos' });

    const callback =  (err, data) => (err) 
        ? response.send(err)
        : response.json({ error: false, data });

        Login.store(newLogin, callback);
};