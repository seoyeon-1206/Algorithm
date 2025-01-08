n = int(input())

for i in range(n):
    word = list(input())
    score = 0
    sum = 0
    for j in word:
        if j == 'O':
            score += 1
        else :
            score = 0
        sum = sum + score
    print(sum)