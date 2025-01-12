import sys
n, k = map(int, sys.stdin.readline().split())

from collections import deque

queue = deque([i for i in range(1, n+1)])
result = []
while len(queue) != 0:
    for i in range(k-1):
        queue.append(queue.popleft())
    result.append(str(queue.popleft()))

print('<'+ ', '.join(result)+'>')
    