const readLineSync = require('readline-sync');

console.log(`Welcome to the "Football?" CLI quiz`);

const username = readLineSync.question('Please enter your name: ');
console.log('Hello ' + username + '! Nice to meet you!\n');

console.log("Let's begin the quiz!\n");

const game = [
    {
        question: 'How many teams play in the Premier League? ',
        answer: '20',
    },
    {
        question: 'Who is the current England manager? ',
        answer: 'Gareth Southgate',
    },
    {
        question: 'Which country has won the most World Cups? ',
        answer: 'Brazil',
    },
    {
        question: 'The record number of World Cup goals is 16, scored by who? ',
        answer: 'Miroslav Klose',
    },
    {
        question: 'Which club has won the most Champions League titles? ',
        answer: 'Real Madrid',
    },
];

const play = (game) => {
    let score = 0;

    for (let round of game) {
        const userAnswer = readLineSync.question(round['question']);
        if (userAnswer.toUpperCase() === round['answer'].toUpperCase()) {
            console.log('Correct!');
            score++;
        } else console.log('Wrong! The correct answer is ' + round['answer']);

        console.log('Current score: ' + score + '\n');
    }

    return score;
};

console.log(
    'You have answered ' +
        play(game) +
        ' out of ' +
        game.length +
        ' questions correctly, ' +
        username
);

const highScore = [{name: 'Charles', score: 5}];

console.log(
    "\nCheck out the high scores. If you should be there, ping me and I'll update it"
);

for (let item of highScore) {
    console.log(item.name + ' : ' + item.score);
}
