const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  title: String,
  fullname: String,
  phonenumber: String,
  price: Number,
  address: String,
  image: String,
  long: String,
  lat: String
},{
  timestamps: true
})

const House = mongoose.model('Houses', houseSchema);
module.exports = House;
