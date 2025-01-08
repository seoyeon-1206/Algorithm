arr = []
for i in range(10):
    n = int(input())
    arr.append(n%42)
    
result = []

for i in arr:
    if i not in result:
        result.append(i)
print(len(result))