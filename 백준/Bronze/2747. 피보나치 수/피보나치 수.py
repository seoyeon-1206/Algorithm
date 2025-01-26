# # 재귀
# def fib(n):
#     if n < 2:
#         return n
#     return fib(n-1) + fib(n-2)
# n = int(input())
# print(fib(n))

# # 재귀 + DP
# def fib(n):
#     if dp[n] == -1: # 한 번도 연산된 적이 없다면
#         dp[n] = fib(n-1) + fib(n-2)
#     return dp[n]
# n = int(input())
# dp = [-1]*100
# dp[0] = 0
# dp[1] = 1
# print(fib(n))

# DP
n = int(input())
dp = [0]*100
dp[1] =1
for i in range(2, n+1):
    dp[i] = dp[i-1] + dp[i-2]
print(dp[n])