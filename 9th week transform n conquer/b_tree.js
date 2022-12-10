// b tree with user input
class Node {
    constructor(data = null, children = null) {
        this.data = data;
        this.parent = null;
        this.children = children;
        if (this.children != null) {
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].parent = this;
            }
        }
    }
}

class BTree {
    constructor(order) {
        this.root = new Node();
        this.order = order;
    }

    insert(data) {
        let currentNode = this.root;
        while (true) {
            if (currentNode.data == null) {
                currentNode.data = [data];
                break;
            } else if (currentNode.children == null) {
                currentNode.data.push(data);
                currentNode.data.sort(function (a, b) { return a - b });
                if (currentNode.data.length == this.order) {
                    let mid = Math.floor(this.order / 2);
                    let left = new Node(currentNode.data.slice(0, mid));
                    let right = new Node(currentNode.data.slice(mid + 1));
                    currentNode.data = [currentNode.data[mid]];
                    currentNode.children = [left, right];
                }
                break;
            } else {
                for (let i = 0; i < currentNode.data.length; i++) {
                    if (data < currentNode.data[i]) {
                        currentNode = currentNode.children[i];
                        break;
                    } else if (i == currentNode.data.length - 1) {
                        currentNode = currentNode.children[i + 1];
                        break;
                    }
                }
            }
        }
    }

    //display b tree with document.write
    display() {
        let currentNode = this.root;
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            document.write(currentNode.data + " ");
            if (currentNode.children != null) {
                for (let i = 0; i < currentNode.children.length; i++) {
                    queue.push(currentNode.children[i]);
                }
            }
        }
    }



    search(data) {
        let currentNode = this.root;
        while (true) {
            if (currentNode.data == null) {
                return false;
            } else {
                for (let i = 0; i < currentNode.data.length; i++) {
                    if (data == currentNode.data[i]) {
                        return true;
                    } else if (data < currentNode.data[i]) {
                        currentNode = currentNode.children[i];
                        break;
                    } else if (i == currentNode.data.length - 1) {
                        currentNode = currentNode.children[i + 1];
                        break;
                    }
                }
            }
        }
    }

    check_valid() {
        let currentNode = this.root;
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            if (currentNode.children != null) {
                if (currentNode.data.length != this.order - 1) {
                    return false;
                }
                for (let i = 0; i < currentNode.children.length; i++) {
                    queue.push(currentNode.children[i]);
                }
            }
        }
        return true;
    }

    minVal(node) {
        let currentNode = node;
        while (currentNode.children != null) {
            currentNode = currentNode.children[0];
        }
        return currentNode.data[0];
    }

    maxVal(node) {
        let currentNode = node;
        while (currentNode.children != null) {
            currentNode = currentNode.children[currentNode.children.length - 1];
        }
        return currentNode.data[currentNode.data.length - 1];
    }

    balance() {
        let currentNode = this.root;
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            if (currentNode.children != null) {
                if (currentNode.data.length < this.order - 1) {
                    let left = currentNode.children[0];
                    let right = currentNode.children[1];
                    if (left.data.length > this.order - 1) {
                        let max = this.maxVal(left);
                        currentNode.data.push(max);
                        currentNode.data.sort(function (a, b) { return a - b });
                        left.data.splice(left.data.indexOf(max), 1);
                    } else if (right.data.length > this.order - 1) {
                        let min = this.minVal(right);
                        currentNode.data.push(min);
                        currentNode.data.sort(function (a, b) { return a - b });
                        right.data.splice(right.data.indexOf(min), 1);
                    } else {
                        currentNode.data.push(right.data[0]);
                        currentNode.data.sort(function (a, b) { return a - b });
                        currentNode.children = [left, right.children[0], right.children[1]];
                    }
                }
                for (let i = 0; i < currentNode.children.length; i++) {
                    queue.push(currentNode.children[i]);
                }
            }
        }
    }

    getSiblings(node) {
        let currentNode = node;
        let parent = currentNode.parent;
        let siblings = [];
        for (let i = 0; i < parent.children.length; i++) {
            if (parent.children[i] != currentNode) {
                siblings.push(parent.children[i]);
            }
        }
        return siblings;
    }
}

let v = Number(prompt("B tree 차원 입력 >> "));
let btree = new BTree(v);
let data = ['a', 'g', 'f', 'b', 'k', 'd', 'h', 'm', 'j', 'e', 's', 'r', 'x', 'c', 'l', 't', 'u', 'v', 'o'];
for (let i of data) {
    btree.insert(i);
}
btree.display();