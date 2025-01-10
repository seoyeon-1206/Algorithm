n, m = map(int, input().split())
arr = []

for i in range(n):
    arr.append(i+1)

for _ in range(m):
    i, j = map(int, input().split())
    arr[i-1], arr[j-1] = arr[j-1], arr[i-1]
    
print(*arr)