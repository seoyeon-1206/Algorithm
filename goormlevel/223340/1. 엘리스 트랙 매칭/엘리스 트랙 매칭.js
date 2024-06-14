// Run by Node.js
const readline = require('readline');

function solution (people, friends, hellobit) {
	let answer = 0;
	for (let i=0; i<people; i++) {
		if (friends[i] === hellobit) answer++
	}
	return answer;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let people = 0; // 첫번째 입력값 1
	let friends = []; // 두번째 입력값 I A I S S
	let hellobit ="" // 마지막으로 들어오는 입력값 S
	let input = [];
	
	for await (const line of rl) {
		input.push(line)
		if (input.length >=3) {
			people = input[0];
			friends = input[1].split(" ");
			hellobit = input[2]
		}
		rl.close();
	}
	console.log(solution(people, friends, hellobit))
	
	process.exit();
})();
