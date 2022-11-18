function gcd(a, b) {
    if (b == 0)
        return a;
    else
        return gcd(b, (a % b));
}
var num1 = prompt("첫 번째 수 입력");
var num2 = prompt("두 번째 수 입력");

var res = gcd(num1, num2);
alert(`${num1}과 ${num2}의 최대공약수 >> ${res}`);
