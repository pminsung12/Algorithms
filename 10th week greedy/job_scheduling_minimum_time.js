job = [10, 11, 24, 12, 9, 14, 15, 20, 22, 35, 19, 3, 21, 25, 18, 30]

function short(job) {
    let pro_s = Array.from(Array(4), () => new Array());
    let jsum1 = [0, 0, 0, 0];

    job.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < job.length; i++) {
        let idx = jsum1.indexOf(Math.min(...jsum1));
        pro_s[idx].push(job[i])
        jsum1[idx] += job[i]
    }
    return pro_s;
};

function long(job) {
    let pro_l = Array.from(Array(4), () => new Array());
    let jsum2 = [0, 0, 0, 0];

    job.sort(function (a, b) {
        return a - b;
    });
    job.reverse();

    for (let i = 0; i < job.length; i++) {
        let idx = jsum2.indexOf(Math.min(...jsum2))
        pro_l[idx].push(job[i])
        jsum2[idx] += job[i]

    }
    return pro_l;
};
console.log("짧은 것 우선 >>", short(job))
console.log("긴 것 우선 >> ", long(job))