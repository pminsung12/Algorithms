function josephus(n, k) {
    if (n === 1)
        return 1;
    else
        return (josephus(n - 1, k)
            + k - 1) % n + 1;
}
var n = prompt("인원 수 입력하세요");
var k = prompt("constant factor 입력하세요");

document.write("가장 마지막 값은 " + josephus(Number(n), Number(k)));