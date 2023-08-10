const { createRandomMessage, delay } = require('../helpers/helpers');

async function spamBot(user, io) {
    while (true) {
        await delay(Math.floor(Math.random() * 111000) + 10000); // От 10 до 120 секунд
        io.to(user.socketId).emit('message', createRandomMessage());
    }
}

module.exports = spamBot;
