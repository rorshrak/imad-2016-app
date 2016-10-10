console.log('Loaded!');
var element = document.getElementById('image');

var left=0;
function move()
{
    left=left+5;
    element.style.marginLeft=left+'px';
}

element.onclick = function(){
    var interval = setInterval(move,50);
};
