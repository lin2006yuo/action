const express = require('express')
const app = express()
const port = 8787

app.get('/', (req, res) => res.send('Hello World! Kev OK'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))