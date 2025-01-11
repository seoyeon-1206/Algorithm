n = int(input())

for i in str(n) :
    li = list(map(int, str(n)))
    
li.sort(reverse =True)
    
for i in li:
    print(i, end ='')