word = input().upper()
word_list = list(set(word))
arr = []

for i in word_list:
    arr.append(word.count(i))
    
if arr.count(max(arr)) >= 2:
    print('?')
else :
    print(word_list[arr.index(max(arr))])
   