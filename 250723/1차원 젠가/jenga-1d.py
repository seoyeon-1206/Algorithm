n = int(input())
blocks = [int(input()) for _ in range(n)]
s1, e1 = map(int, input().split())
s2, e2 = map(int, input().split())

# Please write your code here.

del blocks[s1-1:e1]
del blocks[s2-1:e2]

print(len(blocks))
for i in blocks:
    print(i)
