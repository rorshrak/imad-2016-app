console.log('Loaded!');
var element = document.getElementById('image');
var Left=0;
function move()
{
    Left = Left+10;
    element.style.marginLeft='px';
}

element.onclick = function(){
    var interval = setInterval(move,50);
};