const express = require('express')
const app = express()

app.get('/', function (req, res) {
    return res.json({
        msg: "Hola Mundo!"
    });
})
app.get('/api', function (req, res) {
    return res.json({
        msg: "Hola Mundo desde API!"
    });
})

app.listen(3000)