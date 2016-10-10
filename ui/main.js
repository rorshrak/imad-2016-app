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

var commentInput=document.getElementById('comment');
var comment=commentInput.value;
var submit=document.getElementById('submit');

submit.onclick=function()
{
  var request=new XMLHttpRequest();
  request.onreadystatechange =  function()
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
             var ul=document.getElementById('ul');
             ul.innerHtml=list;
           }
       }
   };
};

request.open('GET','http://rorshrak.imad.hasura-app.io/submit-comment?comment='+comment,true);
request.send('null');
