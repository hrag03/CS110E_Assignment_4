module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
   } 

   function matrixProduct(a, b) {
      if (b.length != a[0].length) {
         console.log("cant compute");
         return false;
      }

      let answer = [];
      for (let i = 0; i < a.length; i++) {
         answer[i] = [];
         for (let j = 0; j < b[0].length; j++) {
            let temp = 0;
            for (let p = 0; p < a[i].length; p++) {
               temp += a[i][p] * b[p][j];
            }
            answer[i][j] = temp;
         }
      }

      return answer;
   }


   function sumOfMatrices(a, b) {
      let answer = [];
      for (let i = 0; i < a.length; i++) {
         answer[i] = [];
         for (let j = 0; j < b[i].length; j++) {
            answer[i][j] = a[i][j] + b[i][j];

         }
      }
      return answer;
   }

   function sumOfArray(a) {
      let answer = 0;
      for (let i = 0; i < a.length; i++) {
         answer += a[i];
      }
      return answer;
   }

   function sumOfEachRow(a) {
      let answer = [];
      for (let i = 0; i < a.length; i++) {
         answer.push(sumOfArray(a[i]));
      }
      return answer;
   }