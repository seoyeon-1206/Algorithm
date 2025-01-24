n, k = map(int, input().split())
arr = []
for i in range(n):
    arr.append(int(input()))

count = 0
for coin in arr[::-1]:
    if coin <= k:
        count += k // coin
        k %= coin
        if k ==0:
            break
print(count)
