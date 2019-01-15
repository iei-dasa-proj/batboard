var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');
var Board = require('../models/Board.js');
var Item = require('../models/Item.js');

//========================================================
//===============STARTING APIs FOR BATBOARD===============
//========================================================

/* Main API for batboard */
router.get('/', function(req, res, next) {
  Board.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

//========================================================
//===============STARTING APIs FOR USERS==================
//========================================================

/** Get All Users */
router.get('/users/', function(req, res, next) {
  // User.find(function (err, products) {
  //   if (err) return next(err);
  //   res.json(products);
  // });
  res.send('Get All Users.\n');
});

//========================================================
//===============STARTING APIs FOR ITEMS==================
//========================================================
/* Get Item by ID */
router.get('/items/:id', function(req, res, next) {
  Item.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
