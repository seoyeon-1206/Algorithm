function solution(wallpaper) {
    var answer = [];
    var x = [];
    var y = [];
    for (let i=0; i<wallpaper.length; i++) {
        for (let j=0; j<wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                x.push(i);
                y.push(j);
            }
        }
    }
    x = x.sort((a,b) => a-b);
    y = y.sort((a,b) => a-b);

    answer.push(x[0], y[0], x[x.length-1]+1, y[y.length-1]+1)
    return answer;
}