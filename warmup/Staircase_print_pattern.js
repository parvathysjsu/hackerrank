/*
     #
    ##
   ###
  ####
 #####
######
*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
for(let i=1,j=(n-1);i<=n;i++,j--){
    let str = "";
    for(let k=0;k<j;k++)
        str=str+" ";
     for(let k=0;k<i;k++)
        str=str+"#";
    console.log(str);
}

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
