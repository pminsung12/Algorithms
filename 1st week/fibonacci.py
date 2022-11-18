A=[1,1]
num=int(input("2보다 큰 양의 정수 num 입력하세요: "))
[A.append(A[i-2] + A[i-1]) for i in range(2,num)]
print(A[num-1])



