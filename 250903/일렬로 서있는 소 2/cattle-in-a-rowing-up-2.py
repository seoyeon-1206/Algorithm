N = int(input())
A = list(map(int, input().split()))
cnt = 0
for i in range(N-2):
    for j in range(i+1, N-1):
        for k in range(i+2, N):
            if i< j < k and A[i]<= A[j] <= A[k]:
                cnt +=1

print(cnt)