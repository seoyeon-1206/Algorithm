function solution (babbling) {
    var answer = 0;
    var can = ["aya", "ye", "woo", "ma"]
    
    for (let i=0; i<babbling.length; i++) {
        let babble = babbling[i]
        
        for(let j = 0; j < can.length; j++){ 
            // 연속해서 같은 발음을 하는 것을 어려워 함
            if(babble.includes(can[j].repeat(2))){
                break;
            }
            babble = babble.split(can[j]).join(" ")
        } 
        if(babble.split(" ").join("").length === 0){
            answer += 1;
        }
    }
    return answer
}