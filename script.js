var tabButtons=document.querySelectorAll(".postsButton");
var tabPannels=document.querySelectorAll(".tab1");
var panelIndex = 0;

function showPanel(panelIndex){
    tabPannels.forEach(function(node){
        node.style.display="none";
        console.log(node);
    
    });
    
    tabPannels[panelIndex].style.display="block";
    // console.log(panelIndex);
}
showPanel(0);