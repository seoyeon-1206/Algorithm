n = int(input())
arr = [
    [0 for _ in range(n)]
    for _ in range(n)
]

x, y = n // 2, n // 2
move_dir, move_num = 0, 1


def in_range(x, y):
    return 0 <= x and x < n and 0 <= y and y < n


def move():
    global x, y
    
    dxs, dys = [0, -1, 0, 1], [1, 0, -1, 0]
    x, y = x + dxs[move_dir], y + dys[move_dir]

def end():
    return not in_range(x, y)

cnt = 1

while not end():
    for _ in range(move_num):
        arr[x][y] = cnt
        cnt += 1
        move()
        if end():
            break
    
    move_dir = (move_dir + 1) % 4
    if move_dir == 0 or move_dir == 2:
        move_num += 1

for i in range(n):
    for j in range(n):
        print(arr[i][j], end=" ")
    print()
