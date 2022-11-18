var arr = [];
for (let i = 0; i < 1000; i++) {
    const randomNum = Math.floor(Math.random() * (5000 - 1000) + 1000);
    arr.push(randomNum);
}
arr.sort();
function binarySearch(target, arr) {
    let low = 0;
    let high = arr.length - 1;

    let index = 0;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = arr[mid];

        if (guess === target) {
            return mid;
        } else if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        index++;
    }
    return undefined;
}

while (true) {
    var input = prompt("(1000~5000) 사이 수를 입력하시면 인덱스 번호가 나옵니다");
    if (input === 'Q') break;

    var result = binarySearch(Number(input), arr);
    alert(`${input}의 인덱스 번호: ${result}`);
}

