const express = require( 'express' );
// const cors = require( 'cors' );
const bodyParser = require( 'body-parser' );
const session = require('express-session');

const config = require('./config.json');

// Controllers
var carsCtrl = require( './controllers/cars_controller' ); 
var cartCtrl = require( './controllers/cart_controller' ); 

//initialize app
var app = express();

//initialize dependencies
// app.use( cors() );
app.use( bodyParser.json() );
app.use( express.static( __dirname + './../public' ) ); 
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

//endpoints
app.get( '/cars', carsCtrl.index );
app.get( '/cars:id', carsCtrl.show );
app.post( '/cars', carsCtrl.create );
app.put( '/cars/:id', carsCtrl.update );
app.delete( '/cars/:id', carsCtrl.destroy );

app.get('/cart', cartCtrl.index);
app.post('/cart', cartCtrl.create);
 

// app listen
app.listen( config.port, function () {
  console.log( 'listening on port ', config.port );
} );
