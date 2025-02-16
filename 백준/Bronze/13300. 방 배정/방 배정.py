n, k = map(int, input().split())
female = {i: 0 for i in range(1, 7)}
male = {i: 0 for i in range(1, 7)}
room = 0

for _ in range(n):
    s, grade = map(int, input().split())
    if s == 0:
        female[grade] += 1
    else:
        male[grade] += 1

# 방 개수 계산
for value in female.values():
    room += (value + k - 1) // k  # 올림 효과

for value in male.values():
    room += (value + k - 1) // k  # 올림 효과

print(room)