var today = new Date ();
var hourNow = today.getHours ();
var greeting;

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