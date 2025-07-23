n = int(input())
blocks = [int(input()) for _ in range(n)]
s1, e1 = map(int, input().split())
s2, e2 = map(int, input().split())

def remove_blocks(s, e):
    temp = []
    global blocks
    s, e = s-1, e-1
    for i in range(len(blocks)):
        if s<=i<=e:
            continue
        temp.append(blocks[i])
    blocks = temp
    return blocks

remove_blocks(s1, e1)
remove_blocks(s2, e2)

print(len(blocks))
for i in blocks:
    print(i)
