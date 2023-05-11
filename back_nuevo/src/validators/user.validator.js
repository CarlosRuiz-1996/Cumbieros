const { Validator } = require('node-input-validator');

exports.usertHasAllData = async (user) => {
    const validator = new Validator(user, {
        nombre: 'required|minLength:5',
        correo: 'nullable',
    });

    return await validator.check();
}