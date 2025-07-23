n, t = map(int, input().split())
arr1 = list(map(int, input().split()))
arr2 = list(map(int, input().split()))

for _ in range(t):
    temp1 = arr1[-1]
    temp2 = arr2[-1]
    for i in range(n-1, 0, -1):
        arr1[i] = arr1[i-1]
        arr2[i] = arr2[i-1]
    arr1[0] = temp2
    arr2[0] = temp1

print(*arr1)
print(*arr2)



