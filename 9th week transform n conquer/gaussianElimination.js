const GaussianElimination = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            ratio = arr[j][i] / arr[i][i]
            for (let k = 0; k < arr[0].length; k++) {
                arr[j][k] -= ratio * arr[i][k]
            }
        }
    }
    return arr
};
const BackSubstitution = (arr) => {

    result = []
    for (let i = arr.length - 1; i > -1; i--) {
        result.push(arr[i][arr[i].length - 1] / arr[i][i])
        for (let j = i - 1; j > -1; j--) {
            arr[j][arr[j].length - 1] -= result[result.length - 1] * arr[j][i]
        }
    }
    result.reverse()
    return result
};
arr = [[2, -2, -4, 2, -2], [-3, 5, 8, 3, 7], [2, -1, -5, 5, 4], [1, 1, 1, 3, 2]]
result = GaussianElimination(arr)
console.log(result);
console.log(BackSubstitution(result));