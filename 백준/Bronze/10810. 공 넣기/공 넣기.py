n, m = map(int, input() .split())
list = [0] * n

for _ in range(m):
    i, j, k = map(int, input() .split())
    for num in range(i, j+1):
        list[num-1] = k

for i in range(n):
    print(list[i], end = ' ')