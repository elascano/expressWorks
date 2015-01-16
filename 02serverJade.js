var express = require('express')
var app = express()
var portarg=process.argv[2]
var jadeTemplate=process.argv[3]

app.set('view engine', 'jade')
app.set('views',jadeTemplate)
app.get('/home', function (req, res) {
  //res.send('Hello World!')
  res.render('index',{date: new Date().toDateString()})
})

var server = app.listen(portarg, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

//THIS IS JUST A TEST TO SEE IF THERE IS A COMMIT ON THE GIT SERVER
