n = int(input())
shirts = list(map(int, input().split()))
t, p = map(int, input().split())

count_shirts = 0
for i in shirts:
    if i > t:
        if i % t == 0:
            count_shirts += i//t
        else:
            count_shirts += i//t + 1
    elif 0<i<=t:
        count_shirts += 1
print(count_shirts)
print(n // p, n%p)

