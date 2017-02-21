var express = require('express');
var router = express.Router();
var controller = require('../controllers/housesController')

/* GET home page. */

router.get('/', function (req,res,next) {
  res.send('use API please')
});

router.get('/api/houses', controller.getAllHouses);

router.post('/api/houses', controller.newHouses);

module.exports = router;
