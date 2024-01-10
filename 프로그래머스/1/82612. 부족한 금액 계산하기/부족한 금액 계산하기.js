function solution(price, money, count) {
    var answer = 0;
    let total_money = 0
    for (let i=1; i<=count; i++){
        total_money += (price * i)
    }
    if (total_money < money) {
        answer = 0;
    } else {
        answer = total_money - money;
    }
   return answer
}