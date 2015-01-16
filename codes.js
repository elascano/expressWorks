//HELLO WORLD!
var express = require('express')
var app = express()
app.get('/home', function(req, res) {
  res.end('Hello World!')
})
app.listen(process.argv[2])

  //  » JADE
var express = require('express')
var app = express()
app.set('view engine', 'jade')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])

  //  » GOOD OLD FORM
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])

  //  » STATIC
var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])

  //  » STYLISH CSS
var express = require('express')
var app = express()

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));


app.listen(process.argv[2])

  //  » PARAM PAM PAM
var express = require('express')
var app = express()

app.put('/message/:id', function(req, res){
    var id = req.params.id
    var str = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
    res.send(str)
})

app.listen(process.argv[2])

  //  » WHAT'S IN QUERY
var express = require('express')
var app = express()

app.get('/search', function(req, res){
    var query = req.query
    res.send(query)
})

app.listen(process.argv[2])

  //  » JSON ME
var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
    var filename = process.argv[3]
    fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
            books = JSON.parse(data)
        } catch (e) {
            res.send(500)
        }
        res.json(books)
    })
})

app.listen(process.argv[2])

//book json
    [{
    "title": "Express.js Guide",
    "tags": ["node.js", "express.js"],
    "url": "http://expressjsguide.com"},
{"title": "Rapid Prototyping with JS",
    "tags": ["backbone.js", "node.js", "mongodb"],
    "url": "http://rpjs.co"},
{"title": "JavaScript: The Good Parts",
    "tags": ["javascript"]}
    ]
