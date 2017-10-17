var express = require('express');
var app = express();
var compression=require('compression');

 


app.use(compression());
app.use(express.static('dist'));

 
 
 
app.post('/connect/token', function(req, res){
    var file="api/json/token.json";
    res.sendfile(file);
});

app.get('*', function(req, res){
    var file="dist/index.html";
    res.sendfile(file);
});


app.listen(5555);


 
console.log("http://localhost:5555/");