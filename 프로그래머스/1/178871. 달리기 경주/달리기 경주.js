function solution(players, callings) {
    // for(let j=0; j<callings.length; j++) {
    //         let index = players.indexOf(callings[j]) // O(n^2) 시간초과
    //         players[index] = players[index-1]
    //         players[index-1] = callings[j]
    //     }
    const playersIdx = {} //{ mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
    players.forEach((name,index)=> {
        playersIdx[name] = index    
    })
    
    for (let i=0; i<callings.length; i++) {    
        let callName = callings[i] //kai
        let nameIdx = playersIdx[callName] //3
        let temp = players[nameIdx]
        
        players[nameIdx] = players[nameIdx -1] //poe, poe
        players[nameIdx-1] = temp //kai, poe
        
        playersIdx[callName] -= 1;
        playersIdx[players[nameIdx]] = nameIdx
        
    }

    return players;
}