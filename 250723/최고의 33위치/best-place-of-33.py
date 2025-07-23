n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
cnt = 0

def solution(x, y, current_cnt):
    for i in range(3):
        for j in range(3):
            current_cnt += arr[x+i][y+j]
    return current_cnt

for i in range(n-2):
    for j in range(n-2):
        current_cnt = 0
        current_cnt += solution(i, j, current_cnt)

        if current_cnt > cnt:
            cnt = current_cnt

print(cnt)



