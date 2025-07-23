n, m, t = map(int, input().split())

arr = [list(map(int, input().split())) for _ in range(n)]
temp = [[0]*n for _ in range(n)]

for _ in range(m):
    x , y = map(int, input().split())
    temp[x-1][y-1] += 1

dxy = [(-1, 0), (1, 0), (0, -1), (0, 1)]

def in_range(x,y):
    return 0<= x< n and 0<=y<n

def move(x, y):
    ans_max = 0
    ans_x, ans_y = -1, -1

    for dx, dy in dxy:
        nx, ny = x + dx, y + dy
        if in_range(nx, ny) and arr[nx][ny] > ans_max:
            ans_max = arr[nx][ny]
            ans_x, ans_y = nx, ny
    return ans_x, ans_y


for _ in range(t):
    # 구슬의 이동
    next_temp = [[0]*n for _ in range(n)]
    
    for i in range(n):
        for j in range(n):
            if temp[i][j] > 0:
                nx, ny = move(i, j)
                next_temp[nx][ny] +=1

    for i in range(n):
        for j in range(n):
            temp[i][j] = next_temp[i][j]
            if temp[i][j] >= 2:
                temp[i][j] = 0

answer = 0

for i in range(n):
    for j in range(n):
        answer += temp[i][j]

print(answer)
        
