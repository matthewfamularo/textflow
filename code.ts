for (const node of figma.currentPage.children) {
  
}
for (const node of figma.currentPage.children) {
  //First, find all layers whose names include "textGroup", and ensure they have only two children
  if(node.name.includes("textGroup") && node.children.length == 2 ){
    //Set the paddingAmount based on the number specified in the layer name
    let paddingAmount = parseInt(node.name.split("-")[1]);
    //Figure out which element is on the right and which is on the left
    if(node.children[0].x < node.children[1].x){
      //The first element is on the left, adjust the x value of the second element accordingly
      node.children[1].x = (node.children[0].x + node.children[0].width + paddingAmount);
    }else{
      //The first element is on the right, adjust the x value of the first element accordingly
      node.children[0].x = (node.children[1].x + node.children[1].width + paddingAmount);
    }
  }
}
figma.closePlugin()
