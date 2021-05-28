'use strict';
const Patient = require('../models/patient.model');

let data={};

exports.findAll = function(req, res) {
Patient.findAll(function(err, employee) {
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
const new_employee = new Patient(req.body);
//handles null error
// console.log("hereee"+Object.values(req.body));
if (!req.body.patient_name||!req.body.age||!req.body.sex||!req.body.Phone_number) {
    res.status(400).send({status:400,message: "patient_name or age or sex or phonenumber cannot be empty!" });
  }


else{
Patient.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({status:200,error:false,message:"Patient added successfully!",data:employee});
});
}
};


exports.findById = function(req, res) {
Patient.findById(req.params.id, function(err, employee) {
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
    Patient.update(req.params.id, new Patient(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Patient successfully updated' });
});
}
};


exports.delete = function(req, res) {
Patient.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Patient successfully deleted' });
});
};