function solution(ingredient) {
    var answer = 0;
    var stack = [];
    for (let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i])
        let hamburger = stack.slice(-4).join("")
        if (hamburger === "1231") {
            stack.splice(-4);
            answer ++;
        }
    }
    return answer;
}