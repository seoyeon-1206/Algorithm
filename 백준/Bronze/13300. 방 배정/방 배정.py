n, k = map(int, input().split())
female = {i: 0 for i in range(1, 7)}
male = {i: 0 for i in range(1, 7)}
room = 0
for i in range(n):
    s, grade = map(int, input().split())
    if s == 0:
        female[grade] +=1
    if s == 1:
        male[grade] += 1

for value in female.values():
    if 0 < value <= k:
        room +=1
    if value > k and value % 2 !=0:
        room += value // 2 +1
    if value > k and value & 2 == 0:
        room += value //2

for value in male.values():
    if 0 < value <= k:
        room +=1
    if value > k and value % 2 !=0:
        room += value // 2 +1
    if value > k and value & 2 == 0:
        room += value //2

print(room)

