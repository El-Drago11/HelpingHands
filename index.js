const express = require('express');
const bodyparser = require('body-parser');
const path = require("path");
const User = require('./userdata');
const register = require('./register');
const appoint = require('./public/appointment');
const Appoint = require('./appoint');
require("./mongoose_connection")
const app = express();
app.use(bodyparser.urlencoded({
    extended: true
}))

// New
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
    res.sendFile('/index.html')
})
app.get('/loginnow', (req, res) => {
    res.sendFile('/login.html')
})
app.post('/loginnow', (req, res) => {
    let req_userdata = new User(req.body);
    req_userdata.save();
    res.send("Login successfully")
})
app.get('/register', (req, res) => {
    res.sendFile('/NewRegistrattion.html')
})
app.post('/register', (req, res) => {
    let req_registerdata = new register(req.body);
    req_registerdata.save();
    res.send(alert("Registered successfully"));
})
app.get('/appoint', (req, res) => {
    res.render('appoint')
})
app.post('/appoint', (req, res) => {
    console.log("req.body.")
    let req_appointdata = new Appoint(req.body);
    req_appointdata.save();
    res.send("Successful")
})

app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Eroor 404:Resource not found</h1>`);
})
app.listen(3000, () => {
    console.log(`app listening on port 3000`);
})