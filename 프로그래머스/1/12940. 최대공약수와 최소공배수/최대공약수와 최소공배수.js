// 최대공약수 : 공통 약수 중 가장 큰 수, 두 수의 곱 / 최소공배수
// 최소공배수 : 공통된 배수 중 가장 작은 수 

function solution(n, m) {
    let min = 1
    for (let i=1; i<=n*m; i++) {
        if ((i % n === 0) && (i % m === 0)) {
            min = i; // 최소공배수 
            break; // 처음으로 찾는게 최소공배수라
        }
    }
    return[n*m/min, min];
}