const countingMoney = (change) => {
    res = [];
    for (let i of money) {
        res.push(parseInt(change / i));
        change %= i;
    }
    return res;
}
money = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
let change = prompt("거스름돈(원) 입력 ");
res = countingMoney(change);
printing = [];
for (let i = 0; i < money.length; i++) {
    if (res[i] !== 0)
        printing.push(`${money[i]}원 ${res[i]}개`);
}
alert(printing);