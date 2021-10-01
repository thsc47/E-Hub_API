const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db.config')
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());
dbConnect.execute();

app.listen(process.env.PORT, ()=>console.log(`server up: ${process.env.PORT}`))