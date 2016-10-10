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

//to display the comments
var commentget=document.getElementById('comment');
var comment=commentget.value;
var submit=document.getElementById('submit_btn');

submit.onclick=function()
{
  var request=new XMLHttpRequest();
  request.onreadystatechange = function()
   {
       if(request.readyState===XMLHttpRequest.DONE)
       {
           if(request.status==200)
           {
             var comments=request.responseText;
             comments=JSON.parse(comments);
             var list='';
             for(var i=0; i<comments.length; i++)
             {
                 list+='<li>' + comments[i] + '</li>';
             }
             var ul=document.getElementById('namelist');
             ul.innerHTML=list;
           }
       }
   }
};

request.open('GET','http://rorshrak.imad.hasura-app.io/submit-comment?comment='+comment,true);
request.send(null);
