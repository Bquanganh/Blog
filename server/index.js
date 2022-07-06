const express = require('express')
const app = express()
const mongodb = require ('mongodb')
const morgan = require('morgan')
const db = require ('./config/db')
const pug = require('pug')
const path = require('path')
const port = 3000

app.use(morgan('combined'))
app.set('view engine','pug')


db.connect()

app.get('/', (req, res) => {
  res.render('index.pug')
})




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})