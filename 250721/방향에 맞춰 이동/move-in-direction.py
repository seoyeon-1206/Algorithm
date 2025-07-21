n = int(input())
moves = [tuple(input().split()) for _ in range(n)]
#[('N', '3'), ('E', '2'), ('S', '1'), ('E', '2')]
dir = [move[0] for move in moves]
#['N', 'E', 'S', 'E']
dist = [int(move[1]) for move in moves]
#[3, 2, 1, 2]

dx = [1, 0, -1, 0]
dy = [0, -1, 0 ,1]

nx, ny = 0, 0

for i in range(n):
    if dir[i] == 'N':
        ny += dy[3] * dist[i]
    elif dir[i] == 'E':
        nx += dx[0] * dist[i]
    elif dir[i] == 'S':
        ny += dy[1] * dist[i]
    else:
        nx += dx[2] * dist[i]

print(nx, ny)



