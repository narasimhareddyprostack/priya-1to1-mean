var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World!flsdakj');
});
var server=app.listen(3000,function() {});