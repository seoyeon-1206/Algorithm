function solution(x) {
    x = String(x)
    var sum = 0;
    for (let i=0; i<x.length; i++) {
        sum += Number(x[i])
    }
    if(Number(x) % sum === 0){
        return true;
    }else return false;
}










