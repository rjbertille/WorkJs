window.onload = function() {
  
  var questionArea = document.getElementsByClassName('questions')[0],
       answerArea = document.getElementsByClassName('answers')[0],
       check  = document.getElementsByClassName('check')[0],
       current = 0,


//An object that holds all the questions + possible answers
//In the array -> last digit gives the right answer

  allQuestions = {
  'What is the name\'s Beyonce sister?':['Aalyah', 'LilKim','Solange',0],
  'Who is the best basket player all the time?':['Kobe','Michael Jordan', 'Kevin Durant',1],
  'What is astrological sign of Barak Obama?':['Leo', 'Aries','Scorpio',1]
 
  }; 


//Load question
function loadQuestion(curr) {
 //this funtion loads all the question into questionArea
 //It grabs the current question based on the "current" variable.
 
 //This variable grabs all the keys of an object and put it in an array
 //The[curr] at the end will give us the current question
  var question = Object.keys(allQuestions)[curr];  

//First remove everything inside the questionArea
questionArea.innerHTML = '';

//Add the current question
questionArea.innerHTML = question;

}

//Load Answer
function loadAnswers(curr) {
  //This function loads all the possible answers of the given question
  //It grabs the needed answer-array with the help of the current-variable
  //Every answer is added with an 'onclick'funtion
  
  //Grab all possible answers from the current question
  var answers = allQuestions[Object.keys(allQuestions)[curr]];
  //Make sure answrArea is empty
  answerArea.innerHTML = '';


  
  //Add all the possible answers to the answerArea
  for(var i = 0; i < answers.length -1; i += 1) {
    var createDiv = document.createElement('div'),
    text = document.createTextNode(answers[i]);
    createDiv.appendChild(text);
    //This adds an onclick function answer
    //The click will execute a function to check if the answer was correct
    createDiv.addEventListener("click",checkAnswer(i, answers));
    answerArea.appendChild(createDiv);
  }
}

//Check answer
function checkAnswer(i, arr) {
  //This is the function that will run, when clicked on one of the answers
  //Check if givenAnswer is same as the correct one
  //After this, check if it's the last question:
  //If it is: empty the answerArea and let them know it's done.
  return function() {
    var givenAnswer = i,
        correctAnswer = arr[arr.length-1];
    
    if (givenAnswer === correctAnswer){
      addCheck(true);
    }else {
      addCheck(false);  
    }
    
    if(current < Object.keys(allQuestions).length -1) {
      current += 1;
      
      loadQuestion(current);
      loadAnswers(current);
    }else {
      questionArea.innerHTML = 'Done';
      answerArea.innerHTML = '';
    }
  };
}

//Add the correct/false-div
function addCheck(bool) {
  //This function add div element to the page
  //Used to see if it was correct or false
  var createDiv = document.createElement('div'),
      txt = document.createTextNode(current + 1);

  createDiv.appendChild(txt);

  if(bool) {
    createDiv.className += 'correct';
    check.appendChild(createDiv);
  } else {
    createDiv.className += 'false';
    check.appendChild(createDiv);
  }
}



//Start the quiz right away
loadQuestion(current);
loadAnswers(current);
};

  


