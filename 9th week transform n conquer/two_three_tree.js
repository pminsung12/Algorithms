// 2-3 tree representation change

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
        this.parent = null;
    }
}

class twoThreeTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (this.root == null) {
            this.root = new Node(data);
        } else {
            var currentNode = this.root;
            while (true) {
                if (data < currentNode.data) {
                    if (currentNode.children[0] == null) {
                        currentNode.children[0] = new Node(data);
                        currentNode.children[0].parent = currentNode;
                        break;
                    } else {
                        currentNode = currentNode.children[0];
                    }
                } else if (data > currentNode.data) {
                    if (currentNode.children[1] == null) {
                        currentNode.children[1] = new Node(data);
                        currentNode.children[1].parent = currentNode;
                        break;
                    } else {
                        currentNode = currentNode.children[1];
                    }
                } else {
                    break;
                }
            }
        }
    }

    display() {
        var currentNode = this.root;
        var queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            console.log(currentNode.data);
            if (currentNode.children[0] != null) {
                queue.push(currentNode.children[0]);
            }
            if (currentNode.children[1] != null) {
                queue.push(currentNode.children[1]);
            }
        }
    }

    split(node) {
        var parent = node.parent;
        var grandParent = parent.parent;
        var newParent = new Node(parent.data);
        if (grandParent == null) {
            this.root = newParent;
            newParent.children[0] = node;
            newParent.children[1] = parent;
            node.parent = newParent;
            parent.parent = newParent;
        } else {
            if (grandParent.children[0] == parent) {
                grandParent.children[0] = newParent;
            } else {
                grandParent.children[1] = newParent;
            }
            newParent.parent = grandParent;
            newParent.children[0] = node;
            newParent.children[1] = parent;
            node.parent = newParent;
            parent.parent = newParent;
        }
    }

    add(data) {
        if (this.root == null) {
            this.root = new Node(data);
        } else {
            var currentNode = this.root;
            while (true) {
                if (data < currentNode.data) {
                    if (currentNode.children[0] == null) {
                        currentNode.children[0] = new Node(data);
                        currentNode.children[0].parent = currentNode;
                        break;
                    } else {
                        currentNode = currentNode.children[0];
                    }
                } else if (data > currentNode.data) {
                    if (currentNode.children[1] == null) {
                        currentNode.children[1] = new Node(data);
                        currentNode.children[1].parent = currentNode;
                        break;
                    } else {
                        currentNode = currentNode.children[1];
                    }
                } else {
                    break;
                }
            }
            if (currentNode.children[0] != null && currentNode.children[1] != null) {
                this.split(currentNode);
            }
        }
    }

    search(data) {
        var currentNode = this.root;
        while (currentNode != null) {
            if (data == currentNode.data) {
                return currentNode;
            } else if (data < currentNode.data) {
                currentNode = currentNode.children[0];
            } else {
                currentNode = currentNode.children[1];
            }
        }
        return null;
    }
}


var tree = new twoThreeTree();
tree.insert(59);
tree.insert(76);
tree.insert(43);
tree.insert(94);
tree.insert(29);
tree.insert(97);
tree.insert(30);
tree.insert(77);
tree.insert(49);
tree.insert(12);
tree.insert(41);
tree.insert(69);
tree.insert(29);
tree.insert(22);
tree.insert(13);

tree.display();

