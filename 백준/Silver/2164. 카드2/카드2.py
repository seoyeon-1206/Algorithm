from collections import deque
import sys

n = int(sys.stdin.readline())

queue = deque([i for i in range(1, n+1)])

while len(queue) > 1:
    queue.popleft()
    switch_num = queue.popleft()
    queue.append(switch_num)
    
print(queue[0])