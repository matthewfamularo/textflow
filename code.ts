  //Use Figma's traversal helper function to find all textGroup groups
const nodes = figma.currentPage.findAll(
  node => node.name.includes("textGroup") && node.children.length == 2 && node.type === "GROUP"
);
for (const node of nodes) {
  //Set the paddingAmount based on the number specified in the layer name
  let paddingAmount = parseInt(node.name.split("-")[1]);
  //Figure out which element is on the right and which is on the left
  //Also ensures that the items aren't already in the right place
  if (node.children[0].x < node.children[1].x && node.children[0].x + node.children[0].width + paddingAmount !== node.children[1].x) {
    //The first element is on the left, adjust the x value of the second element accordingly
    node.children[1].x =
      node.children[0].x + node.children[0].width + paddingAmount;
  } else if(node.children[0].x > node.children[1].x && node.children[1].x + node.children[1].width + paddingAmount !== node.children[0].x) {
    //The first element is on the right, adjust the x value of the first element accordingly
    node.children[0].x =
      node.children[1].x + node.children[1].width + paddingAmount;
  }
}
figma.closePlugin();
