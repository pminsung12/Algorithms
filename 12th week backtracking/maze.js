//backtracking maze
maze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
maze_copy = [...maze];

// end = [10, 10];
let input = prompt("start point(x,y)를 입력하세요");
let start = input.split(",").map(Number);
let input2 = prompt("end point(x,y)를 입력하세요");
let end = input2.split(",").map(Number);

function cango(x, y) {
    if (maze[x][y] === 1) {
        return true;
    } else {
        return false;
    }
}

function go(x, y) {
    if (x == end[0] && y == end[1]) {
        maze_copy[x][y] = 2;
        return true;
    } else if (cango(x, y)) {
        maze_copy[x][y] = 2;
        if (go(x + 1, y)) {
            return true;
        } else if (go(x, y + 1)) {
            return true;
        } else if (go(x - 1, y)) {
            return true;
        } else if (go(x, y - 1)) {
            return true;
        } else {
            maze_copy[x][y] = 0;
            return false;
        }
    } else {
        return false;
    }
}

// go(1, 1);
if (go(start[0], start[1])) {
    document.write(`<h1>${maze_copy.join("<br>")}<br>,0은 갈 수 없는 길, 1은 갈 수 있는 길, 2는 길</h1>`);
}
else {
    alert("길이 없습니다");
}