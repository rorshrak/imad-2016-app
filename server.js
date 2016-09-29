var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles={
    'articleOne':{title:'article-one|Tarun Gehlot',
                  heading:'Article One',
                  date:'29-09-2016',
                  content:'This is article one'
    },
    'articleTwo':{title:'article-two|Tarun Gehlot',
                  heading:'Article Two',
                  date:'30-09-2016',
                  content:'This is article two'
    },
    'articleThree':{title:'article-three|Tarun Gehlot',
                  heading:'Article Three',
                  date:'29-09-2016',
                  content:'This is article three'
    },
};

function createTemplate(data){
    var htmlTemplate=`
    <html>
      <head><title>${title}</title>
      </head>
      <body>
        <h1>${heading}</h1>
        {$date}
        <p>${content}</p>
        <p>${content}</p>
        <p>${content}</p>
      </body>
    </html> 
        `;
    return htmlTemplate;    
}

app.get('/',function(req,res){
   res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));  
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
