// job scheduling minimum processor
function scheduling(job) {
    let processor = [[job.shift()]]
    for (let i of job) {
        cannot_handle = true;
        for (let j of processor) {
            if (i[0] >= j[j.length - 1][1]) {
                j.push(i)
                cannot_handle = false
                break;
            }
        }
        if (cannot_handle) {
            processor.push([i]);
        }
    }
    return processor
}

num = 8;
job = [[0, 2], [3, 7], [5, 6], [8, 9], [7, 10], [10, 11], [12, 13], [8, 10]];

job.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1]
    } else {
        return a[0] - b[0]
    }
})
let processor = scheduling(job);
for (let i of processor)
    console.log(i);