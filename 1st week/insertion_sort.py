arr = [1, 5, 3, 4, 2, 88, 4, 7, -1, 0]
n = len(arr)

for i in range(1, n):
    key = arr[i]
    j = i-1
    while j >= 0 and arr[j] < key:
        arr[j+1] = arr[j]
        j = j-1
    arr[j+1] = key
print(arr)
for i in range(0,5):
    print(arr[i])
# [-1, 0, 1, 2, 3, 4, 4, 5, 7, 88]