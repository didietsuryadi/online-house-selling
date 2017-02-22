var app = new Vue({
      el: '#root',
      data: {
        add:{
          _id: '',
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
              app.resetButton()
            },
          })
        },
        getHouse: function(id) {
        $.ajax({
          url: `http://localhost:3000/api/houses/${id}`,
          type: 'GET',
          success: function(data) {
            app.add._id = data._id
            app.add.title = data.title
            app.add.fullname = data.fullname
            app.add.price = data.price
            app.add.address = data.address
            app.add.phonenumber = data.phonenumber
            app.add.image = data.image
            app.add.lat = data.lat
            app.add.long = data.long
          }
        })
      },
      editHouse: function(id){
        $.ajax({
          url: `http://localhost:3000/api/houses/${id}`,
          type: 'PUT',
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
          success: function(data) {
            app.loadHouse()
          }
        })
      },
      deleteHouse: function(id) {
        $.ajax({
          url: `http://localhost:3000/api/houses/${id}`,
          type: 'DELETE',
          success: function(data) {
            app.loadHouse()
          }
        })
      },
      resetButton: function() {
        app.add.title = ''
        app.add.fullname = ''
        app.add.phonenumber = ''
        app.add.address = ''
        app.add.price = ''
        app.add.image = ''
        app.add.long = ''
        app.add.lat = ''
      }
      }
    })
    app.loadHouse();
