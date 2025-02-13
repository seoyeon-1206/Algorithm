length = int(input())
num = int(input())
cake = [0 for i in range(length)]
cnt = [0 for i in range(length)]
expected = []
for i in range(num):
    p, k = map(int, input().split())
    expected.append(k-p+1)

    for j in range(p-1, k):
        if cake[j] == 0:
            cake[j] = i+1
            cnt[i] +=1

max_expect = max(expected)
print(expected.index(max_expect)+1)

max_num = max(cnt)
print(cnt.index(max_num)+1)

