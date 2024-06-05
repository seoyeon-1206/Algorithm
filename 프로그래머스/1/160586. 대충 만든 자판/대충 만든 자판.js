function solution(keymap, targets) {
    var answer = [];
    var map = new Map(); // 모든 키 값에 대한 최솟값 저장
    //{ 'A' => 1, 'B' => 1, 'C' => 2, 'D' => 5, 'E' => 3, 'F' => 4 }
    
    for (let i=0; i<keymap.length; i++) {
        for (let j=0; j<keymap[i].length; j++) {
            if (!map.has(keymap[i][j])) {
                map.set(keymap[i][j], j+1)
            } else {
                map.set(keymap[i][j], j < map.get(keymap[i][j]) ? j+1 : map.get(keymap[i][j]))
            }
        }
    }
    
    for (let i=0; i<targets.length; i++) {
        var count = 0;
        for (let j=0; j<targets[i].length; j++) {
            if (!map.has(targets[i][j])) {
                count = -1
                break;
            } else {
                count += map.get(targets[i][j])
            }
        }
         answer.push(count)
    }
    
    
    return answer;
}