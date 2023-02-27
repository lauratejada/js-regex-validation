'use strict';

let str = '1.2+3.5';
let strNum = '1.2';
let val = '+';
let pattern = /e/g;
 
console.log(pattern.test('Hello')); // returns true

function isValid(str) { // validate string , if not returns null // regular expression for numbers operator numbers 
    let pattern = /^\d+(\.\d+)?([+]|[-]|[x]|[÷]){1}\d+(\.\d+)?$/g; 
    const aux = str.match(pattern);
    console.log(`Is valid : ${aux}`);
    return (aux !== null) ? true : false;
} 

function isFloat(strNum) { // validate string , if not returns null // regular expression for numbers operator numbers 
    let patternNum = /^\d+(\.\d+)?$/g; 
    const auxNum = strNum.match(patternNum);    
    console.log(`Is Float : ${auxNum}`);
    return (auxNum !== null) ? true : false;
} 

function isOperator(val) {
    let patternOp = /([+]|[-]|[x]|[÷]){1}?/g; // regular expresion for operators
    const auxVal = val.match(patternOp);
    console.log(`Is operator : ${auxVal}`);
    return (auxVal !== null) ? true : false;
}

console.log(isValid(str));
console.log(isFloat(strNum));
console.log(isOperator(val));