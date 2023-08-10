const echoBot = require('./echoBot');
const reverseBot = require('./reverseBot');
const spamBot = require('./spamBot');
const ignoreBot = require('./ignoreBot');

async function startBots(user, io) {
    if (!user.isOnline) return;

    switch (user.name) {
        case 'Echo Bot':
            echoBot(user, io);
            break;
        case 'Reverse Bot':
            reverseBot(user, io);
            break;
        case 'Spam Bot':
            spamBot(user, io);
            break;
        case 'Ignore Bot':
            ignoreBot(user, io);
            break;
        default:
            break;
    }
}

module.exports = {
    startBots,
};
