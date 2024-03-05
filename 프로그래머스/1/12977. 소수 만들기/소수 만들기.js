function solution(nums) {
var answer = 0;
    for (let i=0; i<nums.length; i++) {
        for (let j = i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) answer++
            }
        }
    }
    return answer
}

    function isPrime(score) {
    for (let i=2; i<score; i++) {
        if(score % i === 0) return false
    }
        return true
}

