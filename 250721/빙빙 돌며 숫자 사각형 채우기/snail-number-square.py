n, m = map(int, input().split())
arr = [[0] * m for _ in range(n)]

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

x, y = 0, 0

dir = 0 # 처음 방향은 오른쪽

for i in range(1, n*m +1):
    arr[x][y] = i
    nx = x + dx[dir]
    ny = y + dy[dir]   
    if 0 <= nx < n and 0 <= ny < m and arr[nx][ny] == 0:
        x, y = nx, ny
    else:
        # 방향 바꾸기
        dir = (dir +1) % 4
        x += dx[dir]
        y += dy[dir]

for i in arr:
    print(*i)
        