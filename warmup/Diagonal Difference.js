/*
Diagonal Difference
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal 1+5+9=15 . The right to left diagonal 3+5+9=17 . Their absolute difference is |15-17| = 2.
*/
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
//console.log(arr);
let s = 0;
let ls =0;
let rs =0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(i==j)
            ls = ls +arr[i][j];
        if ((i+j) == arr.length-1)
            rs = rs+ arr[i][j];
     }
}
s = ls -rs;
if (s<0)
    s = s*-1;
return s;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);
//     ws.write(arr[0][0] + '\n');
// ws.write('hello:' + '\n');
// for (let i = 0; i < n; i++) {
//         ws.write(arr[i]  + '\n');
//     }
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(i==j)
//             ws.write('left'+arr[i][j] + '\n');
//         if ((i+j) == arr.length-1)
//             ws.write('right'+arr[i][j]+' '+i+' '+j  + '\n');
//             //rs = rs+ arr[i][j];
// }
    ws.write(result + '\n');

    ws.end();
}
