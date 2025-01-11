n = int(input())
arr = []
for _ in range(n):
    arr.append(str(input().strip()))
arr = list(set(arr))
arr.sort()
arr.sort(key =len)

for i in arr:
    print(i)
    