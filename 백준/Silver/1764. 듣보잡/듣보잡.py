n, m = map(int, input().split())
not_heard = set()
not_seen = set()
result = []

for i in range(n):
    not_heard.add(input())

for i in range(m):
    not_seen.add(input())

result = sorted(list(not_heard&not_seen))

print(len(result))
for i in result:
    print(i)
