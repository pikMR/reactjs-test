var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
const mongoose = require('mongoose');
const Note = require('./models/Note');
//var configuration = require('./config')

app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit:'10mb'}));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// archivos estaticos

app.get('/react', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes',async (req, res) => {
  console.log("entramos en notes");
    const collectionNotes = await Note.find().sort({date:'desc'});
    const colNotesMap = collectionNotes.map(e => ({
        id: e._id,
        nombre: e.nombre,
        intereses: e.intereses,
        correo: e.correo,
        date : e.date
    }));
    res.send(colNotesMap);
});

  app.get('/*', function (req, res) {
      res.sendFile(path.join(__dirname, 'index.html'))
  });

mongoose.connect('mongodb://localhost/notes-db-app',
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db=>console.log('_dbCONNECTED')).catch(err=>console.error(err));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
