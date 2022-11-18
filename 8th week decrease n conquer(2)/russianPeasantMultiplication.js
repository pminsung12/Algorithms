function RPM(n, m) {
    let rpm = 0

    while (true) {
        if (n === 1) {
            rpm += m;
            return rpm;
        }
        else if (n % 2 === 0) {
            n = n / 2;
            m = 2 * m;
        }
        else if (n % 2 === 1) {
            n = parseInt(n / 2);
            rpm += m;
            m = 2 * m;
        }
    }
}
console.time("Time took using Russian Peasant Multiplication with JS");
console.log(RPM(195342362382473513845003428, 399253634579252174384));
console.timeEnd("Time took using Russian Peasant Multiplication with JS");
console.time("Time took using basic multiplication with JS");
console.log(195342362382473513845003428 * 399253634579252174384);
console.timeEnd("Time took using basic multiplication with JS");