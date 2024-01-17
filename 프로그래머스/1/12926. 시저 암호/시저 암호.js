function solution(s, n) {
    return s.split('').map((value) => {
        if (value === ' ') {
            return value;
        }
        let str = value.charCodeAt()
        return value.toUpperCase().charCodeAt() + n > 90 ?
            String.fromCharCode(str+n-26) :
             String.fromCharCode(str+n)
    }).join('');
}