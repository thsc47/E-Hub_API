require('dotenv').config()
require('../redis/config/blocklist')
const express = require('express')
const cors = require('cors')
const dbConnect = require('../config/db.config')
const routes = require('./routes')

const app = express()
dbConnect.execute()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(process.env.PORT, () =>
  console.log(`server up: ${process.env.PORT}`)
)
