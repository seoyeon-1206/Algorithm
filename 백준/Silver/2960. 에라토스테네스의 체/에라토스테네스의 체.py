n, k = map(int, input().split())
count = 0

sieve = [True] * (n+1)

for i in range(2, n+1):
    if sieve[i] == True :
        for j in range(i, n+1, i):
            #지우기
            if sieve[j] == True:
                sieve[j] = False
                count += 1
                if count == k:
                    print(j)
        