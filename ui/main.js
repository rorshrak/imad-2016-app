
//to display the comments

var submit=document.getElementById('submit_btn');

submit.onclick=function()
{
  var request=new XMLHttpRequest();
  request.onreadystatechange = function()
   {
       if(request.readyState===XMLHttpRequest.DONE)
       {
           if(request.status===200)
           {
             var comments=request.responseText;
             comments=JSON.parse(comment);
            
             var list='';
             for(var i=0; i<comments.length; i++)
             {
                 list+='<li>' + comments[i] + '</li>';
             }
             var ul=document.getElementById('namelist');
             ul.innerHTML=list;
           }
       }
   };
   var commentget=document.getElementById('comment');
   var comment=commentget.value;
   request.open('GET','http://rorshrak.imad.hasura-app.io/submit-comment?comment=' + comment, true);
   request.send(null);
};


