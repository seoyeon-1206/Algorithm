arr = [i for i in range(1, 31)]

for n in range(28):
    n = int(input())
    arr.remove(n)

print(min(arr)) 
print(max(arr))