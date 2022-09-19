import {GuessAnswerKey} from './guess-answer-key.js'

//CACABCABCC
const studentAnswersx = [
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



//ADBBCAACCDAADCBDBADB

//ADBBCAACCDAADCBDBCDB - doğru

const studentAnswers = [
    "ADBBCAACCDAADCBDBADB",
    "ADBBCAACCDAAACBDBCDB",
    "ADBBCAACACDAADBDCADB",
    "ADBBCAACCDAAACBDBDDB",
    "ADBBCAACCDAADCBDBBDB",
    "ADBBCAACCDAADCBDBCDB",
    "ABDBCAACCDAAACCXCADB",
    "ADBBCAACDAAACCBDBDDB",
    "ADBBCAACCDAAACBDBADB",
    "ADBBCAACBDAACXBDBACB",
    "ABBBAAACCDBADCADBADB",
    "ADBBCAACCDAADCBDBCDB",
    "ADBBCAACCDBADCBDBCDB",
    "ABBBDAACDDBADDBDBADB",
    "ADBBDAACBDAADCBDBCDB"
]


const guessAnswerKey = new GuessAnswerKey(studentAnswers); 
const answerKey = guessAnswerKey.getAnswerKey();
answerKey.then(res => console.log("posibleAnswerKey =>", res))