K, N = map(int, input().split())

answer = []

def f(curr):
    if curr == N + 1:
        print(*answer)
        return

    for i in range(1, K+1):
        answer.append(i)
        f(curr+1)
        answer.pop()
f(1)

