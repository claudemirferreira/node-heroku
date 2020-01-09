const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require("cors");

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .get('/', function (req, res) {
    return res.send({ error: true, message: "hello" });
  })
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
