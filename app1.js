
function hourGreet() {
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Top of the morning!';
    } else {
        greeting = 'Greetings!';
    }
    document.write(greeting);
}
hourGreet();

function imagesOnScreen(){
    userAnswer = prompt('How many Nick Cages?!');

    for (let i = 0; i < userAnswer;i++){
        document.write('<img src="https://i2.wp.com/www.audienceseverywhere.net/wp-content/uploads/2017/06/Con-Air-Hair-e1496696006989.png?resize=1000%2C500">')
    }
}

function guessingGame(){
    let numberOfGuesses = 7
    let correctAnswer = (Math.floor(Math.random() * 100) +1)
    console.log(correctAnswer);
    let userAnswer = askUserQuestion();
    for(let i = 0; i < numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('You are Correct!');
            break;
        } else if (userAnswer < correctAnswer){
            alert('You are too low. Try again.')
        } else if (userAnswer > correctAnswer){
            alert('You are too high. Try again')
        }
        userAnswer = askUserQuestion();
    }
    if(userAnswer != correctAnswer){
        alert('Thank you for playing')
    }
}

function askUserQuestion(){
    let userAnswer = -1
    while(userAnswer < 1 || userAnswer > 100){
        userAnswer = prompt('Please Enter a number 1-100');
    }
    return userAnswer;
}