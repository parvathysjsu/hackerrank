/*
Time Conversion
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in 12 hour format
Input Format

A single string  containing a time in 12-hour clock forma

Constraints

All input times are valid
Output Format

Convert and print the given time in 24-hour format

Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let z = "";  
    let symbol = ""+s[s.length-2]+s[s.length-1];
    let h = ""+s[0]+s[1];
    if(symbol == "AM"){
       if(h == "12")
            z='00';
        else
            z = h;
    }
    else if(symbol =="PM"){
        if(h  == "12")
            z = "12";
        else
            z = (parseInt(h)+12).toString();
    }
    return z+s.substring(2,s.length-2);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);
    ws.write(result + "\n");

    ws.end();
}
