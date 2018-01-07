// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //take string and split at space
    //cap each word
    //join space
    //return

    let array = str.split(" ").map(el=> {
        return el[0].toUpperCase() + el.slice(1);
    });

    return array.join(' ');

}

module.exports = capitalize;