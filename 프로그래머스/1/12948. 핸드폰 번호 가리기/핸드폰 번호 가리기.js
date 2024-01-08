function solution(phone_number) {
    const n = phone_number.length
    const arr = phone_number.split(''); //배열로 바꿈
    for(let i=0; i<= n-5; i++){
        arr[i] = "*";
    }
    return arr.join("");
}