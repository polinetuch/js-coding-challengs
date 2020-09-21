/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
// (function() {
//     var Question = function(question, [...choices], correctAnswer) {
//         this.question = question;
//         this.choices = [...choices];
//         this.correctAnswer = correctAnswer;
//     }

//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);
//         for (var i = 0; i < this.choices.length; i++) {
//             console.log(i + ": " + this.choices[i])
//         }
//     };

//     Question.prototype.checkAnswer = function(answer) {
//         if (answer === this.correctAnswer) {
//             console.log("Correct");
//         } else {
//             console.log("Incorrect")
//         }
//     }

//     var question1 = new Question("Can chickens fly?", ["Yes", "No", "Unsure"], 0);
//     var question2 = new Question("Which season feels longer in Melbourne? Summer or Winter?", ["Summer", "Winter", "Both"], 1);
//     var question3 = new Question("Double cleansing means using the same cleanser twice at once", ["Yes", "No", "Unsure"], 1);
//     var question4 = new Question("Which active ingredient can be used with Retinal", ["Retinal + Ascorbic Acid", "Retinal + Any Active Ingredient", "Retinal + Niacinamide"], 2);

//     var allQuestions = [question1, question2, question3, question4];
//     var randomQuestion = Math.floor(Math.random() * allQuestions.length);
//     allQuestions[randomQuestion].displayQuestion();

//     var input = parseInt(prompt("What's your answer?"));
//     allQuestions[randomQuestion].checkAnswer(input);
// })()

/*
8. After you display the result, display the next random question, 
so that the game never ends (Hint: Write a function tfor this and call it right 
after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option
to quite the game if the user writes 'exit' instead of answer. In this case, DON'T
call the function from task 8

10. Track user's score to make the game more fun! So each time an answer is correct,
add 1 point to the score (Hint: I'm going to use the power of closures for this, but
you don't have to, just do this with the tools you feel more comfortable with at this point)

11. Display the score in the console. Use yet another method for this
*/

(function() {
    var Question = function(question, [...choices], correctAnswer) {
        this.question = question;
        this.choices = [...choices];
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.choices.length; i++) {
            console.log(i + ": " + this.choices[i])
        }
    };

    Question.prototype.checkAnswer = function(answer, trackScore) {
        var score;
        if (answer === this.correctAnswer) {
            console.log("Correct");
            score = trackScore(true);
        } else {
            console.log("Incorrect");
            score = trackScore(false);
        }
        this.displayScore(score)
    };

    Question.prototype.displayScore = function(score) {
        console.log("Your current score: " + score);
        console.log("-----------");
    }

    var question1 = new Question("Can chickens fly?", ["Yes", "No", "Unsure"], 0);
    var question2 = new Question("Which season feels longer in Melbourne? Summer or Winter?", ["Summer", "Winter", "Both"], 1);
    var question3 = new Question("Double cleansing means using the same cleanser twice at once", ["Yes", "No", "Unsure"], 1);
    var question4 = new Question("Which active ingredient can be used with Retinal", ["Retinal + Ascorbic Acid", "Retinal + Any Active Ingredient", "Retinal + Niacinamide"], 2);

    var allQuestions = [question1, question2, question3, question4];

    function tallyScore() {
        var score = 0;
        return function(correctAnswer) {
            if (correctAnswer) {
                score++;
            }
            return score;
        }
    };

    var trackScore = tallyScore();

    function nextQuestion() {
        var randomQuestion = Math.floor(Math.random() * allQuestions.length);
        allQuestions[randomQuestion].displayQuestion();
    
        var input = prompt("What's your answer?");
        
        if (input !== 'exit') {
            allQuestions[randomQuestion].checkAnswer(parseInt(input), trackScore);
            nextQuestion();
        } else {
            console.log("Exited the game");
        }
    };
    nextQuestion();
})()