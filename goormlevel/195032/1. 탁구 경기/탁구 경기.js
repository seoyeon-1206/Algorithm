// Run by Node.js
const readline = require('readline');

function solution(N, input) {
    let numD = 0;
    let numP = 0;
    
    for (let i = 0; i < N; i++) {
        if (input[i] === 'D') {
            numD++;
        } else if (input[i] === 'P') {
            numP++;
        }
        
        // Check if either player has won by 2 points
        if (Math.abs(numD - numP) >= 2) {
            break;
        }
    }
    
    return `${numD}:${numP}`;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
		let N = null;
		const input = [];
	
	for await (const line of rl) {
		if (N === null) {
            N = parseInt(line.trim()); // Read the first line as number of predictions
        } else {
            input.push(line.trim()); // Push each subsequent line as a prediction
        }
	}
	
	const result = solution(N, input);
    
    // Output the final result
    console.log(result);
    
    // Close the readline interface and exit the process
    rl.close();
	
	process.exit();
})();
