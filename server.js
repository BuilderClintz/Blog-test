const express = require ("express")
const app = express() 

const PORT = process.env.PORT||2380

app.listen(PORT,console.log(`This is my second backend testrun and it is running port ${PORT}`))