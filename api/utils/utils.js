const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'd6F3Efeq';

function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

function nameOf(variable) {
    let nameObject = { variable };
    for (let varName in nameObject) {
        return varName;
    }
}

module.exports = {
    encrypt,
    decrypt,
    nameOf
}