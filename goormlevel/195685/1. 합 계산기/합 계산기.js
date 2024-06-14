const readline = require('readline');
//함수
function solution (T, arr) {
	let sum = 0;
	for (let i=0; i<T; i++) {
		let newArr = arr[i].split(" ");
		if (newArr[1] === '+') {
			sum += Number(newArr[0]) + Number(newArr[2]);
		}else if (newArr[1] === '-') {
			sum += Number(newArr[0]) - Number(newArr[2]);
		}else if (newArr[1] === '/') {
			sum += Math.floor(Number(newArr[0]) / Number(newArr[2]));
		}else {
			sum += Number(newArr[0]) * Number(newArr[2]);
    }
	}
	return sum;
}

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let inputLines = [];
rl.on('line', (line) => {
	inputLines.push(line);
	if (inputLines.length -1 === parseInt(inputLines[0])) {
		rl.close();
	}
});
// 입력값을 다 읽은 후 실행
rl.on('close', () => {
	const T = parseInt(inputLines[0]);
  const arr = inputLines.slice(1);
	
	//console.log('T:', T);
  //console.log('arr:', arr);[ '3 - 4', '4 / 5', '5 * 1' ]
	solution(T,arr)
	console.log(solution(T,arr))
	process.exit();
})