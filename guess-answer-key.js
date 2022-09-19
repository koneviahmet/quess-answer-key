export class GuessAnswerKey {
    
    constructor(answers){
        this.errors         = []
        this.answers        = answers || []
    }


    /* 
      * soru numaralarına göre en çok tekrarlanan cevapları bul
      * tahmini bir cevap anahtarı oluştur.
      * öğrencilerin tahmini oluşan cevap anahtarlarına olan uyum oranlarını bul
      * oranları düşük olan öğrencileri sil
      * başarılı olması muhtemel öğrencilerin cevaplarına göre yeni bir cevap anahtarı oluştur.
    */

    async getAnswerKey(){   
        const firstPossibleAnswers = await this.getMostRepeatedAnswer();
        const checkedAnswers = await this.checkAnswers(firstPossibleAnswers)
        await this.clearUnSuccessfulAnswers(checkedAnswers)
        const secondPossibleAnswers = await this.getMostRepeatedAnswer();

        return secondPossibleAnswers;
    }


    //  { answers: 'AADBDDAABC', true: 5 }
    async clearUnSuccessfulAnswers(checkedAnswers){
        const removeLimit = 65; //%70
        const clearIndex = Math.ceil(removeLimit * checkedAnswers.length / 100);
        const sortAnswers = checkedAnswers.sort((a, b) => b.true - a.true);
        const newAnswers = sortAnswers.splice(0, checkedAnswers.length - clearIndex);
        this.answers = newAnswers.map(a => a.answers);
    }

    
    async checkAnswers(answerKey){
        const students = [];
        for await (const answers of this.answers) {
            let newStudent = {}
            newStudent.answers = answers;

            newStudent.true = 0
            for (let i = 0; i < answers.length; i++) {
                const studentAnswer = answers[i];
                const questionAnswer = answerKey?.[i] || ""

                if (studentAnswer == questionAnswer) {
                    newStudent.true++;
                }
                
            }

            students.push(newStudent)
        }


        return students;
    }


    async getMostRepeatedAnswer(){
        let newAnswerKey = "";
        if (this.answers.length > 0) {
            const firstStudentAnswers = this.answers[0];
            
            let questionIndex = 0
            let sortAnswerByNumber = []
            for await(const question of firstStudentAnswers) {

                sortAnswerByNumber[questionIndex] = "";
                for await (const studentAnswers of this.answers) {
                    let selectAnswer = studentAnswers[questionIndex]
                    sortAnswerByNumber[questionIndex] += selectAnswer
                }
                questionIndex++;
            }

            for (const answer of sortAnswerByNumber) {
                newAnswerKey += this.countRepeatAnswer(answer)[0].answer
            }
        }else{
            this.errors.push("Count of student answers must be greater than zero.")
        }

        return newAnswerKey;
    }   


    countRepeatAnswer(str){
        let obj = [];
        if (str) {
            for  (const question of str) {
                const selectAnswerIndex = obj.map(q => q.answer).indexOf(question)
                if (selectAnswerIndex == -1) { 
                    obj.push({answer: question, count: 1})
                }else{
                    obj[selectAnswerIndex].count = obj[selectAnswerIndex].count + 1; 
                }
            }
        }

        return obj.sort((a,b) => b.count - a.count);
    };

    
    





    getErrors(){
        return this.error
    }
    
    


}