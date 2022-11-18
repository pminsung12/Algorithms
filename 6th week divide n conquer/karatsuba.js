const karatsuba = (x, y) => {
    if (x < 10 && y < 10) {
        return x * y;
    }
    let maxLength = Math.max(x.toString().length, y.toString().length);
    let m = Math.round(maxLength / 2);

    let x1 = Math.floor(x / Math.pow(10, m));
    let y1 = Math.floor(y / Math.pow(10, m));
    let x0 = x % Math.pow(10, m);
    let y0 = y % Math.pow(10, m);

    let L = karatsuba(x1, y1);
    let N = karatsuba(x0, y0);
    let M = karatsuba(x0 + x1, y0 + y1) - L - N;

    return L * Math.pow(10, m * 2) + M * Math.pow(10, m) + N;
}

let x = 2462;
let y = 8014;
console.log("Multiplication using Karatsuba algorithm >> ");
process.stdout.write("2462 * 8014 = " + karatsuba(x, y).toString());
