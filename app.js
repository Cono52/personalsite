const express = require('express')
  , logger = require('morgan')
  , app = express()
  , favicon = require('serve-favicon')
  , template = require('pug').compileFile(__dirname + '/src/views/homepage.pug')


app.use(logger('dev'))
app.use(favicon(__dirname + '/public/imgs/favicon.ico'));
app.use('/', express.static(__dirname + '/public'))
app.use('/', express.static(__dirname + '/public/imgs'))


app.get('/', function (req, res, next) {
  try {
    let html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 8080))
})
