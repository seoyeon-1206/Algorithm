function solution(n, arr1, arr2) {
    var answer = [];
    
       for (let i=0; i<n; i++) {
           let num1 = arr1[i];
           let num2 = arr2[i];
           let str = ""
        for (let j=0; j<n; j++) {
            str = (num1%2 + num2%2) ? "#" + str : " "+ str
           num1 = Math.floor(num1/2);
            num2 = Math.floor(num2/2); 
        }
        answer.push(str)
       } 
   return answer
}