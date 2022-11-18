var arr1 = [];
for (let i = 0; i < 500; i++) {
    const randomNum = Math.floor(Math.random() * (700 - 0) + 100);
    arr1.push(randomNum);
}
arr1.sort();

function interpolationSearch(arr, key) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high && key >= arr[low] && key <= arr[high]) {
        var mid = low + parseInt((key - arr[low]) * (high - low) / (arr[high] - arr[low]))
        if (arr[mid] == key)
            return mid;
        if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1
}
var num1 = prompt("탐색할 값(100~800)");

var res = interpolationSearch(arr1, Number(num1));
if (res == -1) alert("존재하지 않습니다.");
else alert(`${num1}은 ${res}번째 수 입니다.`);