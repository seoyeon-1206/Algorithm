n, m = map(int, input().split())
dic ={}
for i in range(n):
    site, password = map(str, input().split(' '))
    dic[site] = password

for i in range(m):
    print(dic[input()])