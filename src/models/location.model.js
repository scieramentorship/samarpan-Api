'use strict';
var dbConn = require('../db');

//Location object create
var Location = function(location){

  
  this.location_name     = location.location_name;
  this.isActiveStatus    = location.isActiveStatus ? location.isActiveStatus : 1;
  this.city_id         = location.city_id;
  
};

Location.create = function (newLoc, result) {
dbConn.query("INSERT INTO location_master set ?", newLoc, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};


Location.findById = function (id, result) {
dbConn.query("Select * from location_master where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};


Location.findAll = function (result) {
dbConn.query("Select * from location_master", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('location : ', res);
  result(null, res);
}
});
};


Location.findAllCity = function (result) {
    dbConn.query("Select * from city", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('location : ', res);
      result(null, res);
    }
    });
    };

    Location.findAllState = function (result) {
        dbConn.query("Select * from state", function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          console.log('location : ', res);
          result(null, res);
        }
        });
        };
    




Location.update = function(id, location, result){
dbConn.query("UPDATE location_master SET location_name=?,isActiveStatus=?city_id=? WHERE id = ?", [location.location_name,location.isActiveStatus,location.city_id,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Location.delete = function(id, result){
dbConn.query("DELETE FROM location_master WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= Location;