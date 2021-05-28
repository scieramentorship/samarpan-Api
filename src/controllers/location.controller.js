'use strict';
const Location = require('../models/location.model');

let data={};

exports.findAll = function(req, res) {
Location.findAll(function(err, employee) {
  console.log('controller')
  if (err)
  res.send(err);
  data["message"]="ok";
  data["status"]="200";
  data["data"]=employee
  res.send(data);
});
};


exports.findAllCity = function(req, res) {
    Location.findAllCity(function(err, employee) {
      console.log('controller')
      if (err)
      res.send(err);
      data["message"]="ok";
      data["status"]="200";
      data["data"]=employee
      res.send(data);
    });
    };
   
    exports.findAllState = function(req, res) {
        Location.findAllState(function(err, employee) {
          console.log('controller')
          if (err)
          res.send(err);
          data["message"]="ok";
          data["status"]="200";
          data["data"]=employee
          res.send(data);
        });
        };    

        


exports.create = function(req, res) {
const new_employee = new Location(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Location.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({status:200,error:false,message:"Location added successfully!",data:employee});
});
}
};


exports.findById = function(req, res) {
Location.findById(req.params.id, function(err, employee) {
    if (err)
    res.send(err);
    data["message"]="ok";
    data["status"]="200";
    data["data"]=employee
    res.send(data);
});
};


exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Location.update(req.params.id, new Location(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Location successfully updated' });
});
}
};


exports.delete = function(req, res) {
Location.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Location successfully deleted' });
});
};