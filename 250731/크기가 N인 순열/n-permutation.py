n = int(input())

visited = [False] * (n+1)
answer = []

def choose(curr):
    if curr ==  n+1:
        print(*answer)
        return

    for i in range(1, n+1):
        if not visited[i]:
            answer.append(i)
            visited[i] = True
            choose(curr + 1)
            answer.pop()
            visited[i] = False

choose(1)
            
