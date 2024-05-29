function solution(n) {
    n = String(n).split("")
    console.log(n)
    n = n.sort((first, second) => (second - first));
    console.log(n)
    n = n.join("");
    console.log(n)
    n = Number(n);
    return n;
}