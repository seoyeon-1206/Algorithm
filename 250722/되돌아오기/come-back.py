n = int(input())
x, y = 0,0 
dir_dic = {'N': 0, 'E' :1, 'S':2,'W':3}
time = 0

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

for _ in range(n):
    dir, num = input().split()
    num = int(num)
    dir_idx = dir_dic[dir]

    for _ in range(num): 
        x += dx[dir_idx]
        y += dy[dir_idx]
        time += 1
        if x == 0 and y == 0:
            print(time)
            exit()

print(-1)

