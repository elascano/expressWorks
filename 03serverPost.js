var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
/*var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var portArg=process.argv[2]

app.use(bodyParser.urlencoded({extended: false}))

app.post('/path', function(req, res){
  res.send(req.body.str.split('').reverse().join(''))
})

var server = app.listen(portArg, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
*/