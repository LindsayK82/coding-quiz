var startButton = document.querySelector(".button");
var questionsTX=document.getElementById("questions");
var answersTX=document.getElementById("answers");
var questionIndex = 0;
var timeEl = document.getElementById("timer");
var secondsLeft = 60;
var answerButtons = document.querySelector(".answers");

function startGame() {
    isWin = false;
    secondsLeft = 60;

    startButton.disabled = true;

    setTime();
    showQuestions();
    showResults();
}



function setTime() {
    timer = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left to answer!";

        if(secondsLeft === 0) {
            clearInterval(timer);
            sendMessage("Oops! Time ran out!");
        }
    }, 1000);

}

function showQuestions(){
    var currentQuestion = myQuestions[questionIndex];
    answersTX.innerHTML = "";

    questionsTX.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(function(choice, i) {
        var choiceNumber = document.createElement("button")
        choiceNumber.setAttribute("class", "answers")
        choiceNumber.setAttribute("value", choice)

        choiceNumber.textContent = i + 1 + ". " + choice;
        choiceNumber.onclick = showResults;
        answersTX.appendChild(choiceNumber);
    })
	}



function showResults(questions){
        console.log("showResults");
        var answerContainers = answers[answersTX];
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<answers.length; i++){
    
            // userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===answersTX[i].correctAnswer){
                numCorrect++;
                
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }
            // resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }  console.log(showResults);

    startButton.addEventListener("click", startGame);
    answerButtons.addEventListener("click", showResults);
    
    // $( function(beginGame) {
    //     $( ".widget input[type=submit], .widget a, .widget button" ).button();
    //     $( "button, input, a" ).on( "click", function( event ) {
    //       event.preventDefault();
    //     } );
    //   } );


