n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

dx = [-1, 1, 0, 0]  
dy = [0, 0, -1, 1]
cnt = 0

def solution(x, y):
    count = 0
    for d in range(4):
        nx = x + dx[d]
        ny = y + dy[d]

        if nx < 0 or nx >=n or ny < 0 or ny>=n :
            continue
        if arr[nx][ny] == 1:
            count +=1
    return count


for i in range(n):
    for j in range(n):
        if solution(i, j) >=3:
            cnt +=1

print(cnt)
        
        
