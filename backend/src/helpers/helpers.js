export function createRandomMessage() {
    const messages = [
        'Привет!',
        'Как дела?',
        'Что нового?',
        'Отличный день!',
        'Приятно познакомиться!',
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export function getRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

export function generateRandomName() {
    const adjectives = ['Happy', 'Sad', 'Silly', 'Clever', 'Brave', 'Angry', 'Crazy', 'Sleepy', 'Kind', 'Shy'];
    const nouns = ['Panda', 'Tiger', 'Elephant', 'Monkey', 'Lion', 'Dolphin', 'Kangaroo', 'Giraffe', 'Zebra', 'Penguin'];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99

    return `${randomAdjective}${randomNoun}${randomNumber}`;
}
