'use strict';
const Medicine = require('../models/medicines.model');

let data={};

exports.findAll = function(req, res) {
Medicine.findAll(function(err, employee) {
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
const new_employee = new Medicine(req.body);
//handles null error
// console.log("hereee"+Object.values(req.body));
if (!req.body.medicine_name) {
    res.status(400).send({status:400,message: "medicine_name can not be empty!" });
  }


else{
Medicine.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({status:200,error:false,message:"Medicine added successfully!",data:employee});
});
}
};


exports.findById = function(req, res) {
Medicine.findById(req.params.id, function(err, employee) {
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
    Medicine.update(req.params.id, new Medicine(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Medicine successfully updated' });
});
}
};


exports.delete = function(req, res) {
Medicine.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Medicine successfully deleted' });
});
};