export const createRandomMessage = () => {
    const messages = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Parallel lines have so much in common. It's a shame they'll never meet.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
        "How does a snowman get around? By riding an 'icicle!",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "Why did the coffee file a police report? It got mugged!",
        "I used to play piano by ear, but now I use my hands."
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

export const getRandomDelay = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const getRandomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

export const generateRandomName = () => {
    const adjectives = ['Happy', 'Sad', 'Silly', 'Clever', 'Brave', 'Angry', 'Crazy', 'Sleepy', 'Kind', 'Shy'];
    const nouns = ['Panda', 'Tiger', 'Elephant', 'Monkey', 'Lion', 'Dolphin', 'Kangaroo', 'Giraffe', 'Zebra', 'Penguin'];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99

    return `${randomAdjective}${randomNoun}${randomNumber}`;
}
