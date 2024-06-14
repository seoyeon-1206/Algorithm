// Run by Node.js
const readline = require('readline');

function solution(n,c,time) {
	let count = 0;
   for (let i=0; i<n; i++) {
		 let lasKeyPressTime = -c-i
		 let t = time[i+1] - time[i]
		 if (t>c) {
			 count = 0; 
		 } else {
			 count ++;
		 }
	 }
	return count;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	
	for await (const line of rl) {
	  input.push(line.trim());
		if (input.length >=2) {
			rl.close();
		}
	}
	let [n, c] = input[0].split(" ").map(Number);
  let time = input[1].split(" ").map(Number);
	console.log(solution(n,c,time))
	process.exit();
})();
