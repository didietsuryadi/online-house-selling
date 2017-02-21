$(document).ready(function(){
  $('.modal').modal()
});


var app = new Vue({
      el: '#root',
      data: {
        add:{
          title: '',
          fullname: '',
          phonenumber: '',
          address: '',
          price: '',
          image: '',
          long: '',
          lat: ''
        },
        edit:{
          title: '',
          fullname: '',
          phonenumber: '',
          address: '',
          price: '',
          image: '',
          long: '',
          lat: ''
        },
        houses: []
      },
      methods: {
        loadHouse: function() {
          $.ajax({
            url: "http://localhost:3000/api/houses",
            type: "GET",
            success:function (data) {
              app.houses = data;
            },
          })
        },
        addHouse: function () {
          $.ajax({
            url: "http://localhost:3000/api/houses",
            type: "POST",
            data: {
              title: app.add.title,
              fullname: app.add.fullname,
              phonenumber: app.add.phonenumber,
              address: app.add.address,
              price: app.add.price,
              image: app.add.image,
              long: app.add.long,
              lat: app.add.lat
            },
            success:function (data) {
              app.houses.push(data)
              app.add.title = ''
              app.add.fullname = ''
              app.add.phonenumber = ''
              app.add.address = ''
              app.add.price = ''
              app.add.image = ''
              app.add.long = ''
              app.add.lat = ''
            },
          })
        }
      }
    })
    app.loadHouse();
