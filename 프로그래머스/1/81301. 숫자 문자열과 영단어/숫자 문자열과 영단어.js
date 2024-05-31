function solution(s) {
    var answer = s
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
   for (let i=0; i<numbers.length; i++) {
       const arr = answer.split(numbers[i]) // split 구분자는 결과 배열에 포함되지 않는다.
       console.log(arr) //'', '4seveneight'
       answer = arr.join(i) // 배열을 문자열로 결합
   }
    return Number(answer)  
}
