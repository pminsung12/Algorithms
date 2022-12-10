// red black tree representation change
class Node {
    constructor(data) {
        this.data = data;
        this.parent = null;
        this.left = null;
        this.right = null;
        this.color = "RED";
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
            this.root.color = "BLACK";
        } else {
            var currentNode = this.root;
            while (true) {
                if (data < currentNode.data) {
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        newNode.parent = currentNode;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (data > currentNode.data) {
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        newNode.parent = currentNode;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    break;
                }
            }
            this.fixTree(newNode);
        }
    }

    fixTree(node) {
        while (node.parent != null && node.parent.color == "RED") {
            var parent = node.parent;
            var grandParent = parent.parent;
            if (parent == grandParent.left) {
                var uncle = grandParent.right;
                if (uncle != null && this.getColor(uncle) == "RED") {
                    grandParent.color = "RED";
                    parent.color = "BLACK";
                    uncle.color = "BLACK";
                    node = grandParent;
                } else {
                    if (node == parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                    }
                    this.rotateRight(grandParent);
                    // var temp = parent.color;
                    // parent.color = grandParent.color;
                    // grandParent.color = temp;
                    // node = parent;
                    parent.color = "BLACK";
                    grandParent.color = "RED";
                }
            } else {
                var uncle = grandParent.left;
                if (uncle != null && this.getColor(uncle) == "RED") {
                    grandParent.color = "RED";
                    parent.color = "BLACK";
                    uncle.color = "BLACK";
                    node = grandParent;
                } else {
                    if (node == parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                    }
                    parent.color = "BLACK";
                    grandParent.color = "RED";
                    this.rotateLeft(grandParent);
                }
            }
        }
        this.root.color = "BLACK";
    }

    rotateLeft(node) {
        var temp = node.right;
        node.right = temp.left;

        if (temp.left != null) {
            temp.left.parent = node;
        }
        temp.parent = node.parent;
        if (node.parent == null) {
            this.root = temp;
        }
        else {
            if (node == node.parent.left) {
                node.parent.left = temp;
            }
            else {
                node.parent.right = temp;
            }
        }
        temp.left = node;
        node.parent = temp;
    }

    rotateRight(node) {
        var temp = node.left;
        node.left = temp.right;

        if (temp.right != null) {
            temp.right.parent = node;
        }
        temp.parent = node.parent;
        if (node.parent == null) {
            this.root = temp;
        }
        else {
            if (node == node.parent.right) {
                node.parent.right = temp;
            }
            else {
                node.parent.left = temp;
            }
        }
        temp.right = node;
        node.parent = temp;
    }

    getColor(node) {
        if (node == null) {
            return "BLACK";
        } else {
            return node.color;
        }
    }

    inOrder(node) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    printTreeWithColor(node) {
        if (node != null) {
            this.printTreeWithColor(node.left);
            console.log(node.data + " " + node.color);
            this.printTreeWithColor(node.right);
        }
    }
}

var tree = new RedBlackTree();

tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(1);
tree.insert(13);
tree.insert(15);
tree.insert(17);
tree.insert(22);
tree.insert(25);
tree.insert(27);

tree.printTreeWithColor(tree.root);

console.log("After inserting 7 >> ");
tree.insert(7);
tree.printTreeWithColor(tree.root);

