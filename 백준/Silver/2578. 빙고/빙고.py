arr = []
msg = []
for i in range(5):
    arr.append(list(map(int, input().split())))
for i in range(5):
    msg.extend(list(map(int, input().split())))

row_zero = [0]*5
col_zero = [0]*5
right_left = 0
left_right = 0

def bingo():
    cnt = 0
    for i in range(5):
        if row_zero[i] == 5:
            cnt +=1
        if col_zero[i] == 5:
            cnt +=1
    if left_right == 5:
        cnt +=1

    if right_left == 5:
        cnt +=1
    return cnt
    
for k in range(25):
    num = msg[k]
    for i in range(5):
        for j in range(5):
            if arr[i][j] == num:
                arr[i][j] = 0
                row_zero[i] +=1
                col_zero[j] +=1
                if i == j:
                    left_right +=1
                if i+j == 4:
                    right_left +=1
                break
    count = bingo()
    
    if count >=3:
        print(k+1)
        break

