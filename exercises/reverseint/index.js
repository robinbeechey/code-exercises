// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //check if it has - with Math.sign if it does then add at the beggining
    //turn it into string
    //reverse
    //put - back in
    //take zeros out parseInt
    let revStr = n.toString().split('').reverse().join('');

    return parseInt(revStr) * Math.sign(n);

}

module.exports = reverseInt;
