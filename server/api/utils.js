const { User } = require('../db/Models/relationships');
const { Crypto } = require('../db/Models/relationships');

const createUser = async (user) => {
    const { firstName, lastName } = user;
    const createdUser = await User.create({ firstName, lastName });
    return createdUser;
};

const createCrypto = async (crypto) => {
    const { name } = crypto;
    const createdCrypto = await Crypto.create({ name });
    return createdCrypto;
};

const getCrypto = async () => {
    const allCrypto = await Crypto.findAll();

    return allCrypto;
};

const getUsers = async () => {
    const allUsers = await User.findAll();

    return allUsers;
};

const updateUser = (userId) => {
    //get the id or name of the user you want to update
};

const updateCrypto = (cryptoId) => {
    //get the id or name of the crypto you want to update
};

module.exports = { createUser, createCrypto, getCrypto, getUsers };
