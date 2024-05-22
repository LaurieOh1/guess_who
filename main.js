const readlineSync = require('readline-sync');

// Array of Objects with the differents characters
const persons = [{name : "Laurie", hairType : "curly", hairColor: "black", glasses : false},
{name : "Suzanne", hairType : "straight", hairColor: "white", glasses : true},
{name : "Selim", hairType : "curly", hairColor: "brown", glasses : true},
{name : "Bruno", hairType : "straight", hairColor: "blond", glasses : false}
];

const randomCharactere = persons[Math.floor(Math.random() * persons.length)];

const questions = [
    {question: "Is the hair curly ?", key: "hairType", value: "curly"},
    {question: "Is the hair straight ?", key: "hairType", value: "straight"},
    {question: "Is the hair curly ?", key: "hairType", value: "curly"},
    {question: "Is the hair straight ?", key: "hairType", value: "straight"},
    {question: "Is the hair black ?", key: "hairColor", value: "black"},
    {question: "Is the hair brown ?", key: "hairColor", value: "brown"},
    {question: "Is the hair blond ?", key: "hairColor", value: "blond"},
    {question: "Is the hair curly ?", key: "hairType", value: "curly"},
    {question: "Does the person wear glasses ?", key: "glasses", value: true},
    {question: "Does the person not wear glasses", key: "glasses", value: false}
]

let numberOfTries = 0;
let maxTries = 6;

// title

while (numberOfTries < maxTries) {
    const questionIndex = readlineSync.keyInSelect(questions.map(q => q.question),"choose a question ")
    if (questionIndex === -1) {
        console.log("Exit");
    }
    const quest = questions[questionIndex];
    const answer = randomCharactere[quest.key] === quest.value;
    console.log(answer ? "Yes" : "No");
    numberOfTries +=1


const finalAnswer = readlineSync.question('Who is the person ? ');

if(finalAnswer.toLocaleLowerCase() === randomCharactere.name.toLocaleLowerCase()) {
    console.log(`Congratulation ! You are correct`);
} else {
    console.log("Try again");
}

}

if(numberOfTries === maxTries) { 
    console.log("Game Over! try again!");

}
