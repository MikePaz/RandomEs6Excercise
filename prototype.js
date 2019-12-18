(function () {
    let Question = function (question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.answers);
        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ": " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (answer , callback) {
         let currentScore;
        if (answer === this.correctAnswer) {
            console.log('correct answer');
             currentScore =callback(true)
            
        } else {
            console.log('wrong answer')
            currentScore=callback(false);
        }

        this.displayScore(currentScore);
    }


    Question.prototype.displayScore = function(score){
        console.log('Your current score is ' + score)
        console.log('---------------------------------')
    }

    firstQuestion = new Question("Best coding language", ["Java", "Javascript", "Python"], 1)
    secondQuestion = new Question("What's my name", ["Mike", "Nick", "George"], 0)
    thirdQuestion = new Question("What season do we have", ["Summer", "Autumn", "Winter"], 2)

    function score(){
        let currentScore = 0;
        
        return function(correct){
            if(correct){
                currentScore++;
            }
            return currentScore
        }
    }

    let keepScore = score();

    function nextQuestion() {
        let questionsArray = [firstQuestion, secondQuestion, thirdQuestion];
        let randomNumber = Math.floor(Math.random() * questionsArray.length);
        questionsArray[randomNumber].displayQuestion();
        let answer = prompt('Choose the correct answer');
        
        if (answer !== 'exit') {
            questionsArray[randomNumber].checkAnswer(parseInt(answer) , keepScore);
            nextQuestion();
        }
    }
    nextQuestion();

})();