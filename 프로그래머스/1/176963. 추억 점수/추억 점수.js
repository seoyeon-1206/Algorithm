function solution(name, yearning, photo) {
    var answer = [];
    for(let i=0; i<photo.length; i++) {
        var result = 0;
        for (let j=0; j<name.length; j++) {
            photo[i].forEach(person => {
            if (person === name[j]) {
                result += yearning[j]
            }        
});
        }
        answer.push(result)
    }
    return answer;
}