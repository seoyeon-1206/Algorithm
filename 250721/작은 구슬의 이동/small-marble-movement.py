n, t = map(int, input().split())
r, c, d = input().split()
r, c = int(r), int(c)

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

# 방향을 문자 -> 숫자
mapper = {
    "U" : 0,
    "R" : 1,
    "D" : 2,
    "L" : 3
}
dir_name = mapper[d]

def in_range(x,y):
    return 1<=x<=n and 1<=y<=n

for _ in range(t):
    nx, ny = r + dx[dir_name], c + dy[dir_name]

    if in_range(nx,ny):
        r, c = nx, ny
    else:
        # 뒤집기
        dir_name = (dir_name + 2) % 4

print(r, c)





