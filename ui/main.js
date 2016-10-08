console.log('Loaded!');
var element = document.getElementById('image');
var left=0;
function move()
{
    var left=left+5px;
    element.style.marginLeft=left;
}

element.onclick = function(){
    var interval = setInterval(move,50);
};