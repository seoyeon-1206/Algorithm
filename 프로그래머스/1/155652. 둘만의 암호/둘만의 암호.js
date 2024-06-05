function solution(s, skip, index) {
    var answer = '';
    const arr = ['a', 'b', 'c', 'd', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // skip을 뺀 알파벳 배열
    const filteredArr = arr.filter((letter) =>!skip.includes(letter))
    
    for (let i=0; i<s.length; i++) {
        let currentIndex = filteredArr.indexOf(s[i]);
        let newIndex = (currentIndex + index) % filteredArr.length;
        answer += filteredArr[newIndex]
    }
    return answer;
}