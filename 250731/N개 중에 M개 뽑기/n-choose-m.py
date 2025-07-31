N, M = map(int, input().split())

answer = []

def choose(curr):
    if curr == M+1 :
        print(*answer)
        return 

    start = answer[-1] +1 if curr > 1 else 1
    for i in range(start, N+1):
        answer.append(i)
        choose(curr + 1)
        answer.pop()

choose(1)
