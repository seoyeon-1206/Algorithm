n = int(input())
lst = []
result = 0

for i in range(n):
    a, b = map(int, input().split())
    lst.append([a,b])

lst.sort()

max_height = 0  
height_idx = 0  

for i in range(n):
    if max_height < lst[i][1]:
        max_height = lst[i][1]
        height_idx = i

# 초기 높이 설정
height = lst[0][1]

# 기준점의 왼쪽 탐색
for i in range(height_idx):
    if height < lst[i+1][1]:
        result += height * (lst[i+1][0]-lst[i][0])
        height = lst[i+1][1]
    else:
        result += height * (lst[i+1][0] - lst[i][0])

# 기준점의 오른쪽 탐색
height = lst[-1][1]

for i in range(n-1, height_idx,-1):
    if height < lst[i-1][1]:
        result += height * (lst[i][0] - lst[i-1][0])
        height = lst[i-1][1]
    else:
        result += height * (lst[i][0] - lst[i-1][0])

print(result + max_height)
