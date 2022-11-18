data_list = [31, 30, 23, 2, 33, 61, 87, 58, 53, 32, 68, 29, 38, 34, 66, 42, 8, 21, 125, 341, 221, 648, 62, 1, 921]

min_tree = [0]
max_tree = [0]

const is_min_heap = (tree, index) => {

    if (index <= 1)
        return
    else {
        if (tree[index] < tree[parseInt(index / 2)]) {
            [tree[index], tree[parseInt(index / 2)]] = [tree[parseInt(index / 2)], tree[index]]
            is_min_heap(tree, parseInt(index / 2))
        }
        else
            return
    }
}

const min_heap = (tree, data) => {

    tree.push(data);
    if (tree.length <= 2)
        return
    else {
        index = tree.length - 1;
        is_min_heap(tree, index)
    }
}

const is_max_heap = (tree, index) => {

    if (index <= 1)
        return
    else {
        if (tree[index] > tree[parseInt(index / 2)]) {
            [tree[index], tree[parseInt(index / 2)]] = [tree[parseInt(index / 2)], tree[index]]
            is_max_heap(tree, parseInt(index / 2))
        }
        else
            return

    }
}

const max_heap = (tree, data) => {
    tree.push(data)
    if (tree.length <= 2)
        return
    else {
        index = tree.length - 1

        is_max_heap(tree, index)
    }
}


for (let item of data_list) {
    min_heap(min_tree, item)
    max_heap(max_tree, item)
}


console.log(`max heap : ${max_tree.slice(1)}`);
console.log(`min heap : ${min_tree.slice(1)}`);
