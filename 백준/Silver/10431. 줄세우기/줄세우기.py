t = int(input())
for test in range(1, t+1):
    T, *arr = map(int, input().split())
    cnt = 0
    for i in range(len(arr)-1):
        for j in range(i+1, len(arr)):
            if arr[i] > arr[j]:
                arr[i], arr[j] = arr[j], arr[i]
                cnt+=1
    print(T, cnt)