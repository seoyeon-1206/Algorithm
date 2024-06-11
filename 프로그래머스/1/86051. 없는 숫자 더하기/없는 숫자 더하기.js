function solution(numbers){
    var answer = 0;
    const number = [0,1,2,3,4,5,6,7,8,9];

    const filteredArr = number.filter((num) => !numbers.includes(num))
    
    for (let i=0; i<filteredArr.length; i++) {
        answer += filteredArr[i]
    }
    return answer;
}