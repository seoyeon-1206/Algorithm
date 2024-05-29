function solution(s) {
    s = s.toUpperCase();
    num = 0
    for(var i=0; i<s.length; i++) {
        if(s[i] === "P") {
            num -= 1;
        } else if (s[i] === "Y") {
            num += 1;
        }
    } 
    if(num === 0) {
        return true
    } else {
        return false
    }
}