function greeting() {
    let userName = prompt('Con Air or National Treasure?');
    console.log(userName);
    
    if (userName == 'Con Air') {
        document.write('Hello, Criminal!');
    } else if (userName == 'National Treasure') {
        document.write('Hello, Explorer!')
    }
}
greeting();
