console.log('Loaded!');
var element = document.getElementById('image');
function move()
{
    element.style.marginLeft='5px';
}

element.onclick = function(){
    var interval = setInterval(move,50);
};