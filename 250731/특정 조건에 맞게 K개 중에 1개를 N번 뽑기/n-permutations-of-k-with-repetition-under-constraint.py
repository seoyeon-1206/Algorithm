K, N = map(int, input().split())

answer = []

def choose(curr):
    if curr == N +1:
        print(*answer)
        return

    for i in range(1, K+1):
        if curr >=3 and answer[-1] == i and answer[-2] == i:
            continue
        answer.append(i)
        choose(curr+1)
        answer.pop()
        
choose(1)