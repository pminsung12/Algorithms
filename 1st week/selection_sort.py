E=[]
for i in range(5):
    E.append(int(input()))
for i in range(0,4):
    n = i
    for j in range (i+1, 5):
        if E[n] > E[j]:
            n = j
            E[i], E[n] = E[n], E[i]
print(E)