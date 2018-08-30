const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect("mongodb://amir:123abc@ds137812.mlab.com:37812/olx-clone");
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const flash = require("connect-flash");
let port = process.env.PORT || 3000;
const Ad = require('./routes/ad');
const Animals = require('./routes/animals');
const Bikes = require('./routes/bikes');
const Books = require('./routes/books');
const Buisiness = require('./routes/buisiness');
const Electronics = require('./routes/electronics');
const Fashion = require('./routes/fashion');
const Furniture = require('./routes/furniture');
const Jobs = require('./routes/jobs');
const Kids = require('./routes/kids');
const Mobiles = require('./routes/mobiles');
const Property = require('./routes/property');
const Rent = require('./routes/rent');
const Services = require('./routes/services');
const Vehicles = require('./routes/vehicles');
const Search = require('./routes/search');
const User = require('./routes/user');
const Message = require('./routes/message');




app.use(flash());

// mongoose.connect("mongodb://localhost:27017/olx-clone");



mongoose.Promise = global.Promise;
//some important middlewears

app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' })
app.use(jsonParser);
app.use(urlencodedParser);
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));




app.use('/ad', Ad);
app.use('/message', Message);
app.use('/search', Search);
app.use('/user', User);
app.use('/animals', Animals);
app.use('/bikes', Bikes);
app.use('/books', Books);
app.use('/buisiness', Buisiness);
app.use('/electronics', Electronics);
app.use('/fashion', Fashion);
app.use('/furniture', Furniture);
app.use('/jobs', Jobs);
app.use('/kids', Kids);
app.use('/mobiles', Mobiles);
app.use('/property', Property);
app.use('/rent', Rent);
app.use('/services', Services);
app.use('/vehicles', Vehicles);


app.use(express.static(path.join(__dirname, '../public')));
app.get('/*', function(req, res) {   
    res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
app.listen(port, () => {
    console.log(`server is up at ${port}`);
})

