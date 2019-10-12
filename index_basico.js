const express = require('express')
const app = express()

const bodyParser = require('body-parser');

//require('dotenv').config();

app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function () {
    console.log("esta na porta",process.env.PORT)
})

app.use('/', function a(req, res){
    console.log(req.body)
    res.json("ok passo")
});
