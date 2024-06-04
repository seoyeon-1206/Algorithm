function solution (answers) {
    var answer = []
    const arr1 = [1,2,3,4,5];
    const arr2 = [2,1,2,3,2,4,2,5];
    const arr3 = [3,3,1,1,2,2,4,4,5,5];
    let score = [0, 0, 0]
    
    for (let i=0; i<answers.length; i++) {
        if (answers[i] === arr1[i % (arr1.length)]) {
            score[0] ++;
        }
        if (answers[i] === arr2[i % (arr2.length)]) {
            score[1] ++;
        }
        if (answers[i] === arr3[i % (arr3.length)]) {
            score[2] ++;
        }
    }
     for (let i=0; i<score.length; i++) {
         if (score[i] === Math.max(...score)) {
             answer.push(i+1)
         }
     }
   return answer
}