// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    //declare array
    //declare number
    //start loop with length of n
    //each each plus number push to array
    const sequence = [];
    let currentNumber = 0;
    for (var i=0;i<n+1;i++){
        if (i <= 1){
            sequence.push(i);
            currentNumber = i;
        }else {
            //[0,1]
            //i = 2
            //currentNumber = 1
            currentNumber = currentNumber + sequence[i - 2];
            sequence.push(currentNumber);
        }

    }

    return sequence[n];

}

module.exports = fib;
