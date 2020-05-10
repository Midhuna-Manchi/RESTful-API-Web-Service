var express = require ('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
var data = '';

var readerStream = fs.createReadStream('data.json');
readerStream.setEncoding('UTF8');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

readerStream.on('data', function(chunk){
  data += chunk;
});

readerStream.on('end',function(){
  console.log(data);
});

readerStream.on('error',function(err){
  console.log(err.stack);
});

app.get('/', function(req, res, next){
  var users = JSON.parse(data);
  res.send(JSON.stringify(users["customers"]));

});

app.get('/:id', function(req, res, next){
  var req_id = req.params.id;
  var users = JSON.parse(data);
  var count = Object.keys(users["customers"]).length;
  for(var i = 0; i<count ; i++){
    if(req_id == users["customers"][i]["id"]){
      res.send(JSON.stringify(users["customers"][i]));
    }
  }
})

app.get('/customers/:id/orders', function(req, res, next){
  var req_id = req.params.id;
  var users = JSON.parse(data);
  var count = Object.keys(users["customers"]).length;
  for(var i = 0; i<count ; i++){
    if(req_id == users["customers"][i]["id"]){
      res.send(JSON.stringify(users["customers"][i]["orders"]));
    }
  }
})

app.get('/customers/:id/orders/:id1', function(req, res, next){
  var req_id = req.params.id;
  var ord_id = req.params.id1;
  var users = JSON.parse(data);
  var count = Object.keys(users["customers"]).length;

    for(var i = 0; i<count ; i++){
    if(req_id == users["customers"][i]["id"]){
      var count_ord = Object.keys(users["customers"][i]["orders"]).length;
        for(var j = 0; j<count_ord; j++){
          if(ord_id == users["customers"][i]["orders"][j]["orderId"])
            res.send(JSON.stringify(users["customers"][i]["orders"][j]));
                }
    }
  }
})

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("App Listening at http ://%s:%s", host, port);
})
