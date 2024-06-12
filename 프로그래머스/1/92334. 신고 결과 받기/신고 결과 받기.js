function solution(id_list, report, k) {
    var answer = new Array(id_list.length);
    answer.fill(0); //[0,0,0,0]
    let totalList = {}; //{ muzi: [], frodo: [], apeach: [], neo: [] }
    
    id_list.forEach(user => {
        totalList[user] = [];
    })
    
    report.map((user) => {
        const [user_id, report_id] = user.split(" ")
        // user_id가 없을 때
        if (!totalList[report_id].includes(user_id)) {
            totalList[report_id].push(user_id)
        }
    })
//{ muzi: ['apeach'], frodo: ['muzi', 'apeach'], apeach: [], neo: ['frodo', 'muzi'] }
    
    for (let key in totalList) {
        if(totalList[key].length >= k) { 
            //	[ 'muzi', 'apeach' ] [ 'frodo', 'muzi' ]
            totalList[key].map(user => {
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}