var express = require('express');

var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


const User = require("./models/User");
const appController = require("./controllers/appController");


const cors=require('cors');









app.use(cors({
  origin: '*'
}));









app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));







mongoose.connect('mongodb://mongo:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection : ' + err);
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  }),
  uid:""
  //session expires after 3 hours
  

}));


app.get('/fetch',function(req,res) {
  //console.log("item ",req.body.search);
  //let search=req.body.search;
  User.find({}, function (err, allDetails) {
    if (err) {
        console.log(err);
    } else {
      console.log(allDetails);
      
        res.send({"data":allDetails});
    }
})

});



app.post("/add",appController.add);
app.post("/update", appController.update);
app.post("/comment", appController.comment);
app.post("/delete", appController.delete);
app.post("/complete",appController.complete);

  
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log('Server will started at http://127.0.0.1:'+PORT);
});