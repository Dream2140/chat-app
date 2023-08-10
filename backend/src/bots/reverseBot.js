async function reverseBot(user, message) {
    return message.split('').reverse().join('');
}

module.exports = reverseBot;
