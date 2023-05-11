const { Validator } = require('node-input-validator');

exports.loginHasAllData = async (document) => {
    const validator = new Validator(document, {
        usuario: 'required|email',
        password: 'required|minLength:5',
    });

    return await validator.check();
}