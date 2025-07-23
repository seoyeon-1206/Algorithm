n, r, c = map(int, input().split())
arr = [[0] * (n) for _ in range(n)]

for i in range(n):
    row = list(map(int, input().split()))
    for j in range(n):
        arr[i][j] = row[j]

r, c = r-1, c-1

# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

max_num = arr[r][c]

def in_range(x, y):
    return 0<=x<n and 0<=y<n

def moves(x, y):
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if in_range(nx, ny) and arr[nx][ny] > arr[r][c]:
            return (nx, ny)
    return -1, -1


while True:
    print(arr[r][c], end=" ")
    nx, ny = moves(r, c)

    if (nx, ny) == (-1, -1):
        break
    r, c = nx, ny
    



