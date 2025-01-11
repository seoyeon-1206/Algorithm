n = int(input())
#인수 중 소수
for i in range(2, int(n**0.5) +1):
    while n % i == 0:
        print(i)
        # n은 i로 나눈 몫이 된다.
        n //= i 

if n >1 :
    print(n)
    