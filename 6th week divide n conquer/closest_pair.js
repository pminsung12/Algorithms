let Point = function (x, y) {
    this.x = x;
    this.y = y;
};
Point.prototype.getX = function () {
    return this.x;
};
Point.prototype.getY = function () {
    return this.y;
};

let mergeSort = function mergeSort(points, comp) {
    if (points.length < 2) return points;


    let n = points.length,
        i = 0,
        j = 0,
        leftN = Math.floor(n / 2),
        rightN = leftN;


    let leftPart = mergeSort(points.slice(0, leftN), comp),
        rightPart = mergeSort(points.slice(rightN), comp);

    let sortedPart = [];

    while ((i < leftPart.length) && (j < rightPart.length)) {
        if (comp(leftPart[i], rightPart[j]) < 0) {
            sortedPart.push(leftPart[i]);
            i += 1;
        }
        else {
            sortedPart.push(rightPart[j]);
            j += 1;
        }
    }
    while (i < leftPart.length) {
        sortedPart.push(leftPart[i]);
        i += 1;
    }
    while (j < rightPart.length) {
        sortedPart.push(rightPart[j]);
        j += 1;
    }
    return sortedPart;
};

let closestPair = function _closestPair(Px, Py) {
    if (Px.length < 2) return { distance: Infinity, pair: [new Point(0, 0), new Point(0, 0)] };
    if (Px.length < 3) {
        //find euclid distance
        let d = Math.sqrt(Math.pow(Math.abs(Px[1].x - Px[0].x), 2) + Math.pow(Math.abs(Px[1].y - Px[0].y), 2));
        return {
            distance: d,
            pair: [Px[0], Px[1]]
        };
    }

    let n = Px.length,
        leftN = Math.floor(n / 2),
        rightN = leftN;

    let Xl = Px.slice(0, leftN),
        Xr = Px.slice(rightN),
        Xm = Xl[leftN - 1],
        Yl = [],
        Yr = [];
    //separate Py
    for (let i = 0; i < Py.length; i += 1) {
        if (Py[i].x <= Xm.x)
            Yl.push(Py[i]);
        else
            Yr.push(Py[i]);
    }

    let dLeft = _closestPair(Xl, Yl),
        dRight = _closestPair(Xr, Yr);
    console.log("best pair in left >> ", dLeft.distance, dLeft.pair);
    console.log("best pair in right >> ", dRight.distance, dRight.pair);
    let minDelta = dLeft.distance,
        closestPair = dLeft.pair;

    if (dLeft.distance > dRight.distance) {
        minDelta = dRight.distance;
        closestPair = dRight.pair;
    }


    //filter points around Xm within delta (minDelta)
    let closeY = [];
    for (i = 0; i < Py.length; i += 1) {
        if (Math.abs(Py[i].x - Xm.x) < minDelta) closeY.push(Py[i]);
    }
    //find min within delta. 8 steps max
    for (i = 0; i < closeY.length; i += 1) {
        for (let j = i + 1; j < Math.min((i + 8), closeY.length); j += 1) {
            let d = Math.sqrt(Math.pow(Math.abs(closeY[j].x - closeY[i].x), 2) + Math.pow(Math.abs(closeY[j].y - closeY[i].y), 2));
            if (d < minDelta) {
                minDelta = d;
                closestPair = [closeY[i], closeY[j]]
                console.log("best pair in midband >> ", minDelta, closestPair);
            }
        }
    }
    console.log("");

    return {
        distance: minDelta,
        pair: closestPair
    };
};


let points = [
    new Point(0.748501, 4.09624),
    new Point(3.00302, 5.26164),
    new Point(3.61878, 9.52232),
    new Point(7.46911, 4.71611),
    new Point(5.7819, 2.69367),
    new Point(2.34709, 8.74782),
    new Point(2.87169, 5.97774),
    new Point(6.33101, 0.463131),
    new Point(7.46489, 4.6268),
    new Point(1.45428, 0.087596)
];

let sortX = function (a, b) { return (a.x < b.x) ? -1 : ((a.x > b.x) ? 1 : 0); }
let sortY = function (a, b) { return (a.y < b.y) ? -1 : ((a.y > b.y) ? 1 : 0); }

let Px = mergeSort(points, sortX);
let Py = mergeSort(points, sortY);

console.log(JSON.stringify(closestPair(Px, Py))) // {"distance":0.0894096443343775,"pair":[{"x":7.46489,"y":4.6268},{"x":7.46911,"y":4.71611}]}
