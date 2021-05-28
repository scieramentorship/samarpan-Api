'use strict';
const Organisation = require('../models/organisation.model');

let data={};

exports.findAll = function(req, res) {
Organisation.findAll(function(err, employee) {
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
const new_employee = new Organisation(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Organisation.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({status:200,error:false,message:"Organisation added successfully!",data:employee});
});
}
};
exports.findById = function(req, res) {
Organisation.findById(req.params.id, function(err, employee) {
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
    Organisation.update(req.params.id, new Organisation(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Organisation successfully updated' });
});
}
};
exports.delete = function(req, res) {
Organisation.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Organisation successfully deleted' });
});
};