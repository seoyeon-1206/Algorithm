t, m = map(int, input().split())
plus = int(input())
hour = (t*60 + m + plus)//60

if hour>23:
    hour = hour -24
min = (t*60 + m + plus)%60

print(hour, min)