'use strict';

const User = require('@models/users.model');
const { userHasAllData } = require('@validators/user.validator');

exports.getAll = (request, response) => {

    const callback = (err, user) => (err)
        ? response.send(err)
        : response.send({ user });

        User.getAll(callback);
}

exports.getById = (request, response) => {
    const { id } = request.params;

    const callback = (err, user) => (err)
        ? response.send(err)
        : response.send({ user });

        User.getById({ id }, callback);
}

exports.store = async (request, response) => {
    const { body } = request;

    const newUser = new User(body);

    const validationSuccess = await userHasAllData(newUser);

    if (!validationSuccess)
        return response.status(400).json({ error: true });

    const callback =  (err, id) => (err) 
        ? response.send(err)
        : response.json({ error: false, id });

        User.store(newUser, callback);
};

exports.update = async (request, response) => {
    const { body } = request;

    const newUser = new User(body);

    const validationSuccess = await userHasAllData(newUser);

    if (!validationSuccess)
        return response.status(400).json({ error: true });

    const callback = err => (err)
        ? response.send(err)
        : response.json({ error: false });

        User.update(newUser, callback);
};

exports.delete = (request, response) => {
    const { id } = request.params;

    const callback = err => (err) 
        ? response.send(err)
        : response.json({ error: false });

        User.delete(id, callback);
}