function solution(n) {
    //10진법을 3진법으로
    let converted3 = '';
    while(n>=3) {
	    converted3 += (n%3).toString(); 
	    n = Math.floor(n/3); 
    }
     //002
    
    let result = n.toString() //1
    for (let i=converted3.length-1; i>=0; i--){
        result += converted3[i];
    }
    //1200
    //10진법으로
    let answer = 0;
    for(let i=0; i<result.length; i++) {
        answer += result[i] * (3**i);
       
    } 
    return answer
}