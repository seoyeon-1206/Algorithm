function solution(park, routes) {
    // 가로 세로 높이
    const [width, height] = [park[0].length, park.length]; // [3,3]
    // 시작 좌표 구하기
    let start;
    for (let i=0; i<height; i++) {
        for (let j=0; j<width; j++) {
            if (park[i][j] === "S") {
                start = [i, j]
            }
        }
    }
 
    const directions = {
        E : [0,1],
        W : [0, -1],
        S : [1, 0],
        N : [-1, 0]
    }
    
    //[방향, 몇번 이동]
    routes.forEach((route) => {
        const [dir, num] = route.split(" ") //[E, 2]
        let distance = +num  // 2,2,1
        let [x,y] = start;
        
        let step = 0;
        
        while (step < distance) {
            x += directions[dir][0];
            y += directions[dir][1];
            if (x<0 || x >= height || y<0 || y>= width || park[x][y] === 'X' ) break;
            step ++
        }
        if (step === distance) {
            start = [x,y]
        }
    })
    
    return start;
}