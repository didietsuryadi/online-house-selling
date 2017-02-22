var express = require('express');
var router = express.Router();
var controller = require('../controllers/housesController')

/* GET home page. */

router.get('/', function (req,res,next) {
  res.send('use API please')
});

router.get('/api/houses', controller.getAllHouses);

router.get('/api/houses/:id', controller.getHouseById);

router.post('/api/houses', controller.newHouses);

router.put('/api/houses/:id', controller.updateHouse);

router.delete('/api/houses/:id', controller.deleteHouse);

module.exports = router;
