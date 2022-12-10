// convert random 1000 element array to avl tree
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class AVL {
    constructor() {
        this.root = null;
    }

    getRoot() {
        return this.root;
    }
    getHeight(node) {
        var h = 0;
        if (node) {
            var lHeight = this.getHeight(node.left);
            var rHeight = this.getHeight(node.right);
            var maxH = Math.max(lHeight, rHeight);
            h = maxH + 1;
        }
        return h;
    }

    getDiff(node) {
        var lHeight = this.getHeight(node.left);
        var rHeight = this.getHeight(node.right);
        var diff = lHeight - rHeight;
        return diff;
    }

    roteRR(node) {
        var temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
    }

    rotateLL(node) {
        var temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp;
    }

    rotateLR(node) {
        var temp = node.left;
        node.left = this.roteRR(node.left);
        return this.rotateLL(node);
    }

    rotateRL(node) {
        var temp = node.right;
        node.right = this.rotateLL(node.right);
        return this.roteRR(node);
    }

    balance(node) {
        var diff = this.getDiff(node);
        if (diff > 1) {
            if (this.getDiff(node.left) > 0) {
                node = this.rotateLL(node);
            } else {
                node = this.rotateLR(node);
            }
        } else if (diff < -1) {
            if (this.getDiff(node.right) > 0) {
                node = this.rotateRL(node);
            } else {
                node = this.roteRR(node);
            }
        }
        return node;
    }

    insert(root, data) {
        if (root == null) {
            root = new Node(data);
            return root;
        } else if (data < root.data) {
            root.left = this.insert(root.left, data);
            root = this.balance(root);
        } else if (data > root.data) {
            root.right = this.insert(root.right, data);
            root = this.balance(root);
        }
        return root;
    }

    find(root, data) {
        let current = root;
        while (current != data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current == null) {
                return null;
            }
        }
        return current;
    }

    delete(root, data) {
        if (root == null) {
            return null;
        } else if (data < root.data) {
            root.left = this.delete(root.left, data);
        } else if (data > root.data) {
            root.right = this.delete(root.right, data);
        } else {
            if (root.left == null && root.right == null) {
                root = null;
            } else if (root.left == null) {
                root = root.right;
            } else if (root.right == null) {
                root = root.left;
            } else {
                var temp = this.findMin(root.right);
                root.data = temp.data;
                root.right = this.delete(root.right, temp.data);
            }
        }
        if (root != null) {
            root = this.balance(root);
        }
        return root;
    }

    findMin(root) {
        if (root == null) {
            return null;
        } else if (root.left == null) {
            return root;
        } else {
            return this.findMin(root.left);
        }
    }

    findMax(root) {
        if (root == null) {
            return null;
        } else if (root.right == null) {
            return root;
        } else {
            return this.findMax(root.right);
        }
    }

    deleteFromMax(root, data) {
        if (root == null) {
            return null;
        } else if (data > root.data) {
            root.right = this.delete(root.right, data);
        } else if (data < root.data) {
            root.left = this.delete(root.left, data);
        } else {
            if (root.left == null && root.right == null) {
                root = null;
            } else if (root.left == null) {
                root = root.right;
            } else if (root.right == null) {
                root = root.left;
            } else {
                var temp = this.findMax(root.left);
                root.data = temp.data;
                root.left = this.delete(root.left, temp.data);
            }
        }
        if (root != null) {
            root = this.balance(root);
        }
        return root;
    }
}

let avlTree = new AVL();
// //random 1000 numbers between 0 and 1000 to test
// for (let i = 0; i < 1000; i++) {
//     avlTree.insert(Math.floor(Math.random() * 1000));
// }
let root = avlTree.root;
root = avlTree.insert(root, 1);
root = avlTree.insert(root, 2);
root = avlTree.insert(root, 3);
root = avlTree.insert(root, 4);
root = avlTree.insert(root, 5);
root = avlTree.insert(root, 6);
root = avlTree.insert(root, 7);
root = avlTree.insert(root, 8);
root = avlTree.insert(root, 9);
root = avlTree.insert(root, 10);

//print avltree
function printTree(root) {
    if (root != null) {
        printTree(root.left);
        console.log(root.data);
        printTree(root.right);
    }
}
printTree(root);

root = avlTree.deleteFromMax(root, 10);
printTree(root);

