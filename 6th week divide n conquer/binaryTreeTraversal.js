class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {// Creating a node
        let newNode = new Node(data);

        // if root is null then node will
        // be the root.
        if (this.root === null)
            this.root = newNode;
        else

            this.insertNode(this.root, newNode);
    }
    // find the correct position in the
    // tree and add the node
    insertNode(node, newNode) {
        // if the data is less than the node
        // it goes left of the tree
        if (newNode.data < node.data) {
            // if left is null insert node here
            if (node.left === null)
                node.left = newNode;
            else
                // if left is not null recur until
                // null is found
                this.insertNode(node.left, newNode);
        }
        // if the data is more than the node
        // it goes to the right
        else {
            // if right is null insert node here
            if (node.right === null)
                node.right = newNode;
            else

                // if right is not null recur until
                // null is found
                this.insertNode(node.right, newNode);
        }
    }
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            process.stdout.write(node.data + '->');
            this.inorder(node.right);
        }
    }
    preorder(node) {
        if (node !== null) {
            process.stdout.write(node.data + '->');
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            process.stdout.write(node.data + '->');
        }
    }
    getRootNode() {
        return this.root;
    }
}

let BST = new BinarySearchTree();

BST.insert(60);
BST.insert(41);
BST.insert(16);
BST.insert(53);
BST.insert(65);
BST.insert(25);
BST.insert(46);
BST.insert(55);
BST.insert(63);
BST.insert(70);
BST.insert(62);
BST.insert(64);

let root = BST.getRootNode();
console.time("Pre-Order Traversal with JS >> ");
BST.inorder(root);
console.log();
console.timeEnd("Pre-Order Traversal with JS >> ");
console.log();

console.time("In-Order Traversal with JS >> ");
BST.preorder(root);
console.log();
console.timeEnd("In-Order Traversal with JS >> ");
console.log();

console.time("Post-Order Traversal with JS >> ");
BST.postorder(root);
console.log();
console.timeEnd("Post-Order Traversal with JS >> ");
console.log();