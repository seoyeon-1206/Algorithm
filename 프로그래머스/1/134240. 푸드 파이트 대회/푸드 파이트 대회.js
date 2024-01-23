function solution(food) {
    var answer = '';
    let arr = [];
    food.map((element, index) => {
        if (element>1) {
            arr.push(index.toString().repeat(Math.floor(element/2)))
        }
    })
    return arr.join('') + "0" + arr.reverse().join('')
    
}