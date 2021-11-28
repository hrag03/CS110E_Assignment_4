const utilsMatrix = require('./utils.js');

let a = [
    [1, 2, 3, 1],
    [4, 5, 6, 1],
    [7, 8, 9, 1],
    [1, 1, 1, 1],
 ]

 
 let b = [
    [1, 4, 7, 3],
    [2, 5, 8, 7],
    [3, 6, 9, 6],
    [1, 1, 1, 1],
 ]
 
 console.log(utilsMatrix.matrixProduct(a, b)); // Ex 1.
 console.log(utilsMatrix.sumOfMatrices(a, b)); // Ex 2.
 console.log(utilsMatrix.sumOfEachRow(a)); // Ex 3.