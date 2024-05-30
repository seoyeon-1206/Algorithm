function solution(s) {
    var answer = ""
    s = s.split(" ")
   //	[ 'try', 'hello', 'world' ]
 
    for (let i=0; i<s.length; i++){
        var word = s[i];
        for (let j=0; j<word.length; j++) {
            if (j % 2 === 0) {
                answer += word[j].toUpperCase()
            } else {
          answer +=  word[j].toLowerCase()
        }
        }
        if (i<s.length-1) answer += " "
    }
return answer

}