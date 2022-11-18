a=int(input("a 값을 입력하세요 >> "))
sum=0
for x in range(2,a):
    y=2
    while(x%y != 0):
        y+=1
    if x==y:
        sum+=x
print(sum)