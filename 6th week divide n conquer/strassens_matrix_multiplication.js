const strassens = (A, B) => {
    let C = [[0, 0], [0, 0]];
    let M1 = (A[0][0] + A[1][1]) * (B[0][0] + B[1][1]);
    let M2 = (A[1][0] + A[1][1]) * B[0][0];
    let M3 = A[0][0] * (B[0][1] - B[1][1]);
    let M4 = A[1][1] * (B[1][0] - B[0][0]);
    let M5 = (A[0][0] + A[0][1]) * B[1][1];
    let M6 = (A[1][0] - A[0][0]) * (B[0][0] + B[0][1]);
    let M7 = (A[0][1] - A[1][1]) * (B[1][0] + B[1][1]);
    C[0][0] = M1 + M4 - M5 + M7;
    C[0][1] = M3 + M5;
    C[1][0] = M2 + M4;
    C[1][1] = M1 + M3 - M2 + M6;
    return C;
};

let A = [[10, 8], [12, 11]];
let B = [[4, 9], [8, 13]];
let C = strassens(A, B);
for (let row of C) {
    console.log(row);
}

