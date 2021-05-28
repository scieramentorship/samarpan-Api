'use strict';
const Labtest = require('../models/labtest.model');

let data={};

exports.findAll = function(req, res) {
Labtest.findAll(function(err, employee) {
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
const new_employee = new Labtest(req.body);
//handles null error
// console.log("hereee"+Object.values(req.body));
if (!req.body.camp_date) {
    res.status(400).send({status:400,message: "camp_date can not be empty!" });
  }


else{
Labtest.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({status:200,error:false,message:"Labtest added successfully!",data:employee});
});
}
};


exports.findById = function(req, res) {
Labtest.findById(req.params.id, function(err, employee) {
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
    Labtest.update(req.params.id, new Labtest(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Labtest successfully updated' });
});
}
};


exports.delete = function(req, res) {
Labtest.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Labtest successfully deleted' });
});
};