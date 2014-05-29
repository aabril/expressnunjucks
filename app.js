var nunjucks = require('nunjucks');
var express  = require('express');
var path     = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'static')));

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.get('/', function(req, res){
    res.render('index.html', {
        title: 'my first express & nunjucks site',
        items: [
            { name: 'item 1' },
            { name: 'item 2' },
            { name: 'item 3' },
            { name: 'item 4' },
        ]
    });
});

app.listen(3012);
console.log("listening on port 3012");

