function solution(s) {
    var answer = '';
    arr = s.split(' ') //[ 'try', 'hello', 'world' ]
    for (let i=0; i<arr.length; i++){
        //i 0 1 2
        for (let j=0; j<arr[i].length; j++){
            let a = arr[i][j]
            if (j % 2 === 0){
                answer += a.toUpperCase();
            } else {
                answer += a.toLowerCase();
            }
        }
        if (i < arr.length-1) {
            answer += ' ';
        }
    }
    return answer;
}

// def solution(s):
//     answer = ''
//     arr = s.split(' ')
    
    
//     for i in range(len(arr)):
//         for j in range(len(arr[i])):
//             a = arr[i][j]
//             if j % 2 == 0:
//                 answer += a.upper()   
//             else:
//                 answer += a.lower()
//         answer += ' '
//     answer = answer[0: -1]
        
//     return answer