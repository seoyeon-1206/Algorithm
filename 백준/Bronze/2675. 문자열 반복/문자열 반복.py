t = int(input())
for i in range(t):
    n, s= input().split()
    for j in range(len(s)):
        print(s[j] * int(n), end = '')
    print()