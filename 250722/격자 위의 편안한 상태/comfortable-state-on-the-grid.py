n, m = map(int, input().split())
points = [tuple(map(int, input().split())) for _ in range(m)]

arr = [[0] * n for _ in range(n)]

dx = [0,1,0,-1]
dy = [1,0,-1,0]

def in_range(x, y):
    cnt = 0
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0<=nx<n and 0<=ny<n and arr[nx][ny] == 1:
            cnt +=1
    if cnt == 3:
        return 1
    else:
        return 0
    
for x, y in points:
    arr[x-1][y-1] = 1
    print(in_range(x-1,y-1))

