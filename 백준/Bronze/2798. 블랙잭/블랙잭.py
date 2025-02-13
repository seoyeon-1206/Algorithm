n, m = map(int, input().split())
cards = list(map(int, input().split()))
path = [0]*3
numbers = []

def abc(level,start):
    if level == 3:
        Sum = sum(path)
        if Sum <= m :
            numbers.append(Sum)
        return
    for i in range(start, n):
        path[level] = cards[i]
        abc(level+1, i+1)

abc(0,0)

print(max(numbers))
