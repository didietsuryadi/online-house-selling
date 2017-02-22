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
  getHouseById: function(req,res) {
    House.findOne({_id:req.params.id}).then(function(data){
      res.send(data)
    })
  },
  updateHouse: function(req,res) {
    House.findOneAndUpdate({_id: req.params.id},{
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
  },
  deleteHouse: function(req,res){
    House.findOneAndRemove({_id: req.params.id})
    .then(function(data){
      res.send('House Deleted')
    })
  }
}
