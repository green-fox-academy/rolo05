// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTen(number){
    if( number % 10 !== 0){
        let newnumb = number % 10 
        console.log(newnumb)
    }else( number % 10 === 0); {
        console.log('Fail');
    }
}
divideTen(25);
