n = int(input())
A = list(map(int, input().split()))

answer = 21e8

for t in range(n):
    total_distance = 0
    for i in range(n):
        total_distance += A[i] * abs(i-t)
    answer = min(answer, total_distance)

print(answer)
