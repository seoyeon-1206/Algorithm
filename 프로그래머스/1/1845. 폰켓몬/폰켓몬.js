function solution(nums) {
    var answer = 0;
    var n = nums.length/2
    const set = new Set(nums)
    const arr = [...set]
    if (arr.length  > n) {
        return n;
    } else {
        return arr.length;
    }
    
}