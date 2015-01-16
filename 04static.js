var express = require('express')
var path = require('path')
var app = express()
var portArg=process.argv[2]
var data=process.argv[3]

app.use(express.static(data||path.join(__dirname, 'public')))


app.listen(portArg)
