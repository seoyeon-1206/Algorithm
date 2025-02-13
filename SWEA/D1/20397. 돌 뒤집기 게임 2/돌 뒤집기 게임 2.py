t = int(input())

for test in range(1, t+1):
    n, m = map(int, input().split())
    arr = list(map(int, input().split()))

    for _ in range(m) :
        i, j = map(int, input().split())
        i -= 1

        for k in range(1,j+1):
            if i+k<n and i-k >=0 and arr[i+k] == arr[i-k]:
                arr[i-k] = 1- arr[i-k]
                arr[i+k] = 1- arr[i+k]

    print(f'#{test}', *arr)

