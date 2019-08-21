//Use Figma's traversal helper function to find all textGroup groups
var nodes = figma.currentPage.findAll(function (node) { return node.name.includes("textGroup") && node.children.length == 2 && node.type === "GROUP"; });
console.log(nodes);
for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var node = nodes_1[_i];
    //Set the paddingAmount based on the number specified in the layer name
    var paddingAmount = parseInt(node.name.split("-")[1]);
    //Figure out which element is on the right and which is on the left
    if (node.children[0].x < node.children[1].x) {
        //The first element is on the left, adjust the x value of the second element accordingly
        node.children[1].x =
            node.children[0].x + node.children[0].width + paddingAmount;
    }
    else {
        //The first element is on the right, adjust the x value of the first element accordingly
        node.children[0].x =
            node.children[1].x + node.children[1].width + paddingAmount;
    }
}
figma.closePlugin();
