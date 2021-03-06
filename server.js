require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/db.config')
const routes = require('./src/routes')

const app = express()
dbConnect.execute()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(process.env.PORT, () =>
  console.log(`server up: ${process.env.PORT}`)
)
