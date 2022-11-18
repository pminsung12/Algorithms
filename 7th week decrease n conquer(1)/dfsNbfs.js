class Node {
    constructor(data) {
        this.data = data; // 다른 노드와 차별점을 두는 데이터
        this.children = []; // 자식들과의 정보(주소)를 담을 배열
    }

    add(data) { // 자식 추가하는 메소드
        this.children.push(new Node(data)); // 자식 노드를 생성하고 바로 배열에 저장한다. (주소를 저장하는 행위)
    }
};

class Tree {
    constructor() {
        this.root = null;
    }

    BFS(fn, value) { // 인자로 callback 함수를 받는다.
        if (this.root === null) return;

        const visited = [];
        const unvisitedQueue = [this.root];
        while (unvisitedQueue.length !== 0) {
            const current = unvisitedQueue.shift(); // dequeue
            if (value !== null && current.data == value) {
                return true;
            }


            if (!visited.includes(current.data)) {
                visited.push(current.data);
                unvisitedQueue.push(...current.children); // 현재 부모 노드의 자식들을 모두 다 큐에 담는다. 
                fn(current); // 현재 노드를 가지고 callback 함수 실행
            }
        }
        return false;
    }

    DFS(fn, value) {
        if (this.root === null) return;

        const visited = [];
        const unvisitedList = [this.root];
        while (unvisitedList.length !== 0) {
            const current = unvisitedList.shift();
            if (value !== null && current.data == value) {
                return true;
            }

            if (!visited.includes(current.data)) {
                visited.push(current.data);
                unvisitedList.unshift(...current.children); // list 앞에다 넣어준다. (우선순위: 내 자식들이 먼저야! )
                fn(current);
            }
        }
        return false;
    }

}

const t = new Tree(); // 빈 트리를 생성 해 주고
t.root = new Node(5); // 루트가 node 'a'의 주소를 가리키면 'a' 의 자식들까지 접근 가능하다. 
t.root.add(1); // 5 의 자식으로 1
t.root.add(6); // 5 의 자식으로 6
t.root.children[0].add(2); // '1' 의 자식으로 2
t.root.children[0].children[0].add(3); // '2' 의 자식으로 3
t.root.children[0].add(4); // '1' 의 자식으로 4
t.root.children[0].children[1].add(3); // '4' 의 자식으로 3
t.root.children[0].children[0].children[0].add(4); // '3' 의 자식으로 4

t.root.children[1].add(7); // '6' 의 자식으로 7
t.root.children[1].children[0].add(8); // '7' 의 자식으로 8
t.root.children[1].children[0].children[0].add(9); // '8' 의 자식으로 9
t.root.children[1].children[0].children[0].children[0].add(10); // '9' 의 자식으로 10
t.root.children[1].add(9); // '6' 의 자식으로 9
t.root.children[1].children[1].add(8); // '9' 의 자식으로 8
t.root.children[1].children[1].add(10); // '9' 의 자식으로 10

console.log("===========================================");
console.log("--------------      BFS      --------------");
t.BFS(node => process.stdout.write(JSON.stringify(node.data) + '->'), null);
console.log("\n");
console.log("--------------      DFS      --------------");
t.DFS(node => process.stdout.write(JSON.stringify(node.data) + '->'), null);
console.log("\n");
console.log("---------      BFS search 8      ---------");
if (t.BFS(node => process.stdout.write(JSON.stringify(node.data) + '->'), 8) === true) {
    process.stdout.write("     FOUND 8");
}
else console.log('cannot find 8');
console.log("\n");
console.log("---------      DFS search 8     ---------");
if (t.DFS(node => process.stdout.write(JSON.stringify(node.data) + '->'), 8) === true) {
    process.stdout.write("     FOUND 8");
}
else console.log('cannot find 8');
console.log("\n===========================================");
