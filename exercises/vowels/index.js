// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//function vowels(str) {
//    let count = 0;
//    const checker = ['a','e','i','o','u'];
//
//    for (let char of str.toLowerCase()){
//        if (checker.includes(char)){
//            count++;
//        }
//    }
//
//    return count;
//    //use regex to find all vowels and create string and then find length of string.
//    //search all non vowels and replace them with nothing then count
//
//    //for (var i = 0; i < str.length; i++){
//        //if (str[i] === )
//        //use regex to find
//
//    //}
//}

function vowels(str) {
    let vowelArray = str.toLowerCase().match(/[aeiou]/gi);

    return vowelArray ? vowelArray.length : 0;
}

module.exports = vowels;
