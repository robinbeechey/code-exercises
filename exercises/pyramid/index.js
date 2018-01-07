// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

//function pyramid(n) {
//
//            const middle = Math.floor(columnTotal/2);
//    for (var row=0;row < n;row++){
//        let columnTotal = (2*n) - 1;
//        let level = '';
//
//        for (var column=0;column < columnTotal; column++){
//
//            let hashRangeStart = middle - row;
//            let hashRangeEnd = middle + row;
//
//            //console.log(`Hash Range: ${hashRangeStart} _ ${hashRangeEnd}`);
//
//            if(column >= hashRangeStart && column <= hashRangeEnd){
//                level += '#';
//            } else {
//                level += ' ';
//            };
//        }
//        console.log(level);
//    }
//
//}

function pyramid(n, row=0, level='', column=0) {

    let columnTotal = (2*n) - 1;
    const middle = Math.floor(columnTotal/2);
    const hashRangeStart = middle - row;
    const hashRangeEnd = middle + row;

    if (n === row){
        return;
    }

    if (columnTotal === level.length){
        console.log(level);
        return pyramid(n, row +1);
    }

    if (column >= hashRangeStart && column <= hashRangeEnd){
        level += '#';
    } else {
        level += ' ';
    }
    pyramid(n, row, level, column + 1);

}

module.exports = pyramid;
