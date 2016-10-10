var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne:{title:'article-one | Tarun Gehlot',
                  heading:'Article One',
                  date:'29-09-2016',
                  content:'This is article one'
    },
    articleTwo:{title:'article-two | Tarun Gehlot',
                  heading:'Article Two',
                  date:'30-09-2016',
                  content:'This is article two'
    },
    articleThree:{title:'article-three | Tarun Gehlot',
                  heading:'Article Three',
                  date:'29-09-2016',
                  content:'This is article three'
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
      <head><title>${title}</title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport",content="width=device-width,initial-scale=1"></meta>
      </head>
      <body>
      <div class="header">
        <h1>${heading}</h1>
      </div>
      <div class="content">
        ${date}
        <p>${content}</p>
        <p>${content}</p>
        <p>${content}</p>
      </div>    
      </body>
    </html> 
        `;
    return htmlTemplate;    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css',function(req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png',function(req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js',function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var comments=[];
app.get('/submit-comment',function(req, res){
   var comment=req.query.comment;
   comments.push(comment);
   res.send(JSON.stringify(comments));
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));  
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
