
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
             var comments=['name1','name2'];
            
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
