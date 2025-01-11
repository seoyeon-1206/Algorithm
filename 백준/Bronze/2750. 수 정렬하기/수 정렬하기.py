n = int(input())
arr = []
for _ in range(n):
    arr.append(int(input()))
    
answer = sorted(set(arr))

for i in answer:
    print(i)