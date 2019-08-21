//Use Figma's traversal helper function to find all textGroup groups
var nodes = figma.currentPage.findAll(function (node) {
    return node.name.includes("textGroup") &&
        node.children.length == 2 &&
        node.type === "GROUP";
});
//Loop over each textGroup node
for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var node = nodes_1[_i];
    //Set the paddingAmount based on the number specified in the layer name
    var paddingAmount = parseInt(node.name.split("-")[1]);
    //Figure out which element is on the right and which is on the left
    //Also ensures that the items aren't already in the right place
    if (relation(node.children) == "horizontal") {
        if (node.children[0].x < node.children[1].x &&
            node.children[0].x + node.children[0].width + paddingAmount !==
                node.children[1].x) {
            //The first element is on the left, adjust the x value of the second element accordingly
            node.children[1].x =
                node.children[0].x + node.children[0].width + paddingAmount;
        }
        else if (node.children[0].x > node.children[1].x &&
            node.children[1].x + node.children[1].width + paddingAmount !==
                node.children[0].x) {
            //The first element is on the right, adjust the x value of the first element accordingly
            node.children[0].x =
                node.children[1].x + node.children[1].width + paddingAmount;
        }
    }
    else if (relation(node.children) == "vertical") {
        if (node.children[0].y < node.children[1].y &&
            node.children[0].y + node.children[0].height + paddingAmount !==
                node.children[1].y) {
            //The first element is on the left, adjust the x value of the second element accordingly
            node.children[1].y =
                node.children[0].y + node.children[0].height + paddingAmount;
        }
        else if (node.children[0].y > node.children[1].y &&
            node.children[1].y + node.children[1].height + paddingAmount !==
                node.children[0].y) {
            //The first element is on the right, adjust the x value of the first element accordingly
            node.children[0].y =
                node.children[1].y + node.children[1].height + paddingAmount;
        }
    }
}
figma.closePlugin();
function relation(items) {
    var margin = 24;
    //if they're horizontally laid out
    if (items[0].y + margin >= items[1].y && items[0].y - margin <= items[1].y) {
        return "horizontal";
    }
    else if (items[0].x + margin >= items[1].x && items[0].x - margin <= items[1].x) {
        return "vertical";
    }
}
