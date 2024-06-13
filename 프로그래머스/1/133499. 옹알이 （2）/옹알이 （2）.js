function solution (babbling) {
    var answer = 0;
    var can = ["aya", "ye", "woo", "ma"]
    
    for (let i=0; i<babbling.length; i++) {
        let babble = babbling[i]
        
        for(let j = 0; j < can.length; j++){ 
            if (babble.includes(can[j].repeat(2))) {
                break;
            }
            babble = babble.split(can[j]).join(" ")
        }
        console.log(babble)
        console.log(babble.split(" ").join(""))
        // if (babble.split(" ").join("").length === 0) {
        // answer++ }
        if (babble.trim() === "") {
            answer++;
        }
    }
     return answer   
}