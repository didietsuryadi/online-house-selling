const House = require('../models/houses');

module.exports = {
  newHouses: function(req,res) {
    let newHouses = House({
      title: req.body.title,
      fullname: req.body.fullname,
      phonenumber: req.body.phonenumber,
      price: req.body.price,
      address: req.body.address,
      image: req.body.image,
      long: req.body.long,
      lat: req.body.lat
    })

    newHouses.save().then(function(data){
      res.send(data)
    })
  },
  getAllHouses: function(req,res) {
    House.find().then(function(data){
      res.send(data)
    })
  },
  updateQuantity: function(req,res) {
    House.find({_id: req.body.id},{
      title: req.body.title,
      fullname: req.body.fullname,
      phonenumber: req.body.phonenumber,
      price: req.body.price,
      address: req.body.address,
      image: req.body.image,
      long: req.body.long,
      lat: req.body.lat
    },{new: true}).then(function(data){
      res.send(data)
    })
  }
}
