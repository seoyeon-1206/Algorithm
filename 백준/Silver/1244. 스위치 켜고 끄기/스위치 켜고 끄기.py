n = int(input())
switches = list(map(int, input().split()))
num = int(input())

for i in range(num):
    gender, switch = map(int, input().split())
    if gender == 1:
        for i in range(switch-1, n, switch):
            switches[i] = 1-switches[i]
    if gender == 2:
        switch -=1
        left, right = switch, switch
        while left > 0 and right <n-1  and switches[left-1] == switches[right+1]:
            left -=1
            right +=1
        
        for i in range(left, right+1):
            switches[i] = 1- switches[i]

for i in range(0, len(switches), 20):
    print(' '.join(map(str, switches[i:i+20])))
    
