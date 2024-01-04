function solution(n) {
    n = String(n).split('');
    n = n.sort((a,b)=>(b-a));
    n = n.join('');
    n = Number(n)
    
    return n; 
}