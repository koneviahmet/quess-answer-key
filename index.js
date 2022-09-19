import {GuessAnswerKey} from './guess-answer-key.js'

//CACABCABCC
const studentAnswers = [
    "CACABCABCC",
    "ABBBACBBCC",
    "AACBDBBBDC",
    "ACDBCCCBDC",
    "AADBDDAABC",
    "AADBABBBCC",
    "AACBCBBBDC",
    "DDABCCDABD",
    "AACCADDBAA",
    "DBACCBBCBD",
    "DADDCCBD D",
    "ADACDDABBC",
    "BDBABCAACB",
    "BDBACABABB",
    "BCBACABABB"
]


const guessAnswerKey = new GuessAnswerKey(studentAnswers); 
const answerKey = guessAnswerKey.getAnswerKey();
answerKey.then(res => console.log("posibleAnswerKey =>", res))