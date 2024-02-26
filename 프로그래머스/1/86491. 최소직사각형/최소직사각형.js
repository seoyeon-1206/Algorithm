function solution(sizes) {
    // 지갑의 생김새는 가로가 길게!
    let maxWidth = 0;
    let maxHeight = 0;
    for (let i=0; i<sizes.length; i++) {
        const currentWidth = sizes[i][0]  > sizes[i][1] ? sizes[i][0] :
        sizes[i][1]; // 더 긴 것
        
        const currentHeight = sizes[i][0]  > sizes[i][1] ? sizes[i][1]         : sizes[i][0]; // 더 짧은 것 
        
        if (maxWidth < currentWidth) {
            maxWidth = currentWidth;
        }
        if (maxHeight < currentHeight) {
            maxHeight = currentHeight;
        }
    }
    
    return maxWidth * maxHeight;
}