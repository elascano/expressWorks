var express = require('express')
var app = express()
var portarg=process.argv[2]

app.get('/home', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(portarg, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
