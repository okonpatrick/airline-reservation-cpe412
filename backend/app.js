const express = require('express');
const cors = require('cors')
const app = express()


const flieghtRouter = require('./routes/flieghtRouter')

app.use(cors())


app.use('api/v1/flieght', flieghtRouter)


module.exports = app