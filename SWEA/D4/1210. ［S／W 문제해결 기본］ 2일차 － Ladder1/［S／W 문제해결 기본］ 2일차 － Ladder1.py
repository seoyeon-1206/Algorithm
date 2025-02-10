def solution(y,x):
    while y > 0 :
        if x+1< 100 and ladder[y][x+1] ==1:
            while x+1<100 and ladder[y][x+1] ==1:
                x +=1
        elif x-1 >= 0 and ladder[y][x-1] == 1:
            while x-1 >= 0 and ladder[y][x-1] == 1:
                x -= 1
        y -=1  
    return x

for _ in range(10):
    test = int(input())
    ladder = [list(map(int, input().split())) for _ in range(100)]
    
    for i in range(100):
        if ladder[99][i] == 2:
            x = i
            break

    res = solution(99, x)
    print(f'#{test} {res}')