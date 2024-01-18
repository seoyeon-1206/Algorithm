function solution(s) {
    const numbers = {
        'zero': 0, 'one':1,'two':2, 'three': 3, 'four':4, 'five':5, 'six':6,                 'seven': 7, 'eight' : 8, 'nine': 9};
    
    while (isNaN(s)) { //모두 숫자가 아닐때
        for (const key in numbers) {
            if (s.indexOf(key) >= 0){
                s = s.replace(key, numbers[key]);
            }
        }
    }
    return Number(s)
}
