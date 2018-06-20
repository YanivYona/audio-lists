var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    functions = require('./functions'),
    port = process.env.PORT || 8080;

functions.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('port',port);
app.use('/', express.static('./public'));//for API
app.use(
 (req,res,next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
 next();
 });


// get all songs via GET method
app.get('/getAllSongs', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(functions.getAllSongs());
});

// get song by id vua POST method
app.post('/getSongById', (req, res) => {
    var id = req.body.id;
    res.status(200).send(functions.getSongById(id));
});

// get song by player name & year via GET method
app.get('/getSongByPlayerAndYear/:player/:year', (req, res) => {
    res.status(200).send(functions.getSongByPlayerAndYear(req.params.player, req.params.year));
});

// get .css layout for index.html file
app.get('/css/style.css', (req, res) => {
    res.sendFile(`${__dirname}/css/style.css`);
});

// present the api file
app.all('*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});


app.listen(port);
console.log(`listening on port ${port}`);
