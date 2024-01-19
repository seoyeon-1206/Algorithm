function solution(strings, n) {
    let answer = [];
    
    for(let i=0; i<strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
        //cabce cabcd xcdx
    } 
    
    strings.sort(); //	[ 'cabcd', 'cabce', 'xcdx' ]
    for(let j=0; j<strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");
        answer.push(strings[j])
    }
    return answer;
}