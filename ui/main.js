console.log('Loaded!');
var element = document.getElementById('image');

function move()
{
    marginLeft = marginLeft+10;
    element.style.marginLeft=maginLeft;
}

element.onclick = function(){
    var interval = setInterval(move,50);
};