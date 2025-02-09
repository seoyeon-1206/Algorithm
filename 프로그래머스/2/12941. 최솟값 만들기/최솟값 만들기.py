def solution(A,B):
    answer = 0
    A.sort() # 오름차순 1,2,4
    B.sort(reverse=True) # 5,4,4
    
    for i in range(len(A)):
        answer += A[i] * B[i]
    
    return answer