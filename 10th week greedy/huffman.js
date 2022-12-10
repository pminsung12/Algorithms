//huffman coding letter encoding

let string = prompt("문자열 입력 ");

//create a dictionary of letters and their frequencies
var dict = {};
for (var i = 0; i < string.length; i++) {
    if (dict[string[i]]) {
        dict[string[i]]++;
    } else {
        dict[string[i]] = 1;
    }
}

//create a list of tuples of letters and their frequencies
var list = [];
for (var key in dict) {
    list.push([key, dict[key]]);
}

//sort the list by frequency
list.sort(function (a, b) {
    return a[1] - b[1];
})

//create a tree of tuples of letters and their frequencies
var tree = [];
for (var i = 0; i < list.length; i++) {
    tree.push([list[i]]);
}

//merge the two lowest frequency tuples into a new tuple
//and add it to the tree
while (tree.length > 1) {
    var a = tree.shift();
    var b = tree.shift();
    var c = [a, b];
    tree.push(c);
}

//create a dictionary of letters and their codes
var codes = {};
function traverse(node, code) {
    if (node.length == 1) {
        codes[node[0][0]] = code;
    } else {
        traverse(node[0], code + "0");
        traverse(node[1], code + "1");
    }
}
traverse(tree[0], "");

//print the dictionary
for (var key in codes) {
    document.write(key + ": " + codes[key] + '<br>');
}



//output
//a: 000
//b: 001
//c: 010
//d: 011
//e: 100
//f: 101
//g: 110
//h: 111



