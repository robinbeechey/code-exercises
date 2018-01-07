// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string){
    return string.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}


module.exports = anagrams;


//function anagrams(stringA, stringB) {
//    const stringAMap = mapChars(stringA);
//    const stringBMap = mapChars(stringB);
//
//
//    if(Object.keys(stringAMap).length !== Object.keys(stringBMap).length){
//        return false;
//    };
//
//    for (let char in stringAMap){
//            if(stringAMap[char] !== stringBMap[char]){
//                return false;
//            }
//        }
//
//    return true;
//
//}
//
//function mapChars(string){
//    const mappedChars = {};
//
//    for (let char of string.replace(/[^\w]/g, "").toLowerCase()){
//        mappedChars[char] = mappedChars[char] + 1 || 1;
//    }
//
//    return mappedChars;
//}