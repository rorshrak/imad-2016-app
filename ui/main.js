console.log('Loaded!');
var element = document.getElementById('image');
var left=0;
function move()
{
    var left=left+5;
    element.style.marginLeft=left;
}

element.onclick = function(){
    var interval = setInterval(move,50);
};