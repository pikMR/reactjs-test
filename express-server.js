var express = require('express');
var app = express();

app.get('/*',function (req,res){
  res.send("hola mundio");
});

app.listen(8181,function(){
  console.log("ejemplo- app - listeningon por 8181");
});
