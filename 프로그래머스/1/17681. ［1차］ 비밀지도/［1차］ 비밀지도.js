function solution(n, arr1, arr2) {
    var answer = [];
    
    var convertedArr1 = []
    var convertedArr2 = []
    
       for (let i=0; i<arr1.length; i++) {
            let str1 = ""
            while (arr1[i] >0 ) {
                str1 = (arr1[i]%2) + str1
                arr1[i] = Math.floor(arr1[i]/2)
            }
            while (str1.length <n) {
                str1 = "0" + str1
            }
           
            convertedArr1.push(str1)
        }
           for (let i=0; i<arr2.length; i++) {
            let str2 = ""
            while (arr2[i] >0 ) {
                str2 = (arr2[i]%2) + str2
                arr2[i] = Math.floor(arr2[i]/2)
            }
            while (str2.length <n) {
                str2 = "0" + str2
            }
            convertedArr2.push(str2)
        }
    
    // 두 배열 비교
    for(let i=0; i<n; i++) {
        let combinedStr = "";
        for (let j=0; j<n; j++) {
            if(convertedArr1[i][j] === "1" || convertedArr2[i][j] === "1") {
                combinedStr += '#';
            } else {
                combinedStr += ' ';
            }
        } 
        answer.push(combinedStr)
    }
   return answer
}