t = int(input())

for _ in range(t):
    k = int(input())
    n = int(input())
    people = [i for i in range(1, n+1)]
    
    for j in range(k):
        for y in range(1, n):
            people[y] += people[y-1]
    print(people[-1])