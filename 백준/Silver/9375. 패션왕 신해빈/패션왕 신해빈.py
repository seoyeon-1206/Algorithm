T = int(input())
for case in range(T):
    n = int(input())
    cloth = {}

    for i in range(n):
        name, type = input().split()

        if type in cloth.keys():
            cloth[type].append(name)
        else:
            cloth[type] = [name, ""]
    answer = 1
    for key in cloth.keys():
        answer *= len(cloth[key])

    print(answer -1)

