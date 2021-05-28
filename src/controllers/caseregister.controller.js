'use strict';
const Caseregister = require('../models/caseregister.model');

let data={};

exports.findAll = function(req, res) {
Caseregister.findAll(function(err, employee) {
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
const new_employee = new Caseregister(req.body);
//handles null error
// console.log("hereee"+Object.values(req.body));
if (!req.body.patient_name||!req.body.age||!req.body.sex||!req.body.Phone_number) {
    res.status(400).send({status:400,message: "patient_name or age or sex or phonenumber cannot be empty!" });
  }


else{
Caseregister.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({status:200,error:false,message:"Caseregister added successfully!",data:employee});
});
}
};


exports.findById = function(req, res) {
Caseregister.findById(req.params.id, function(err, employee) {
    if (err)
    res.send(err);
    data["message"]="ok";
    data["status"]="200";
    data["data"]=employee
    res.send(data);
});
};


// exports.update = function(req, res) {
//   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//     res.status(400).send({ error:true, message: 'Please provide all required field' });
//   }else{
//     Caseregister.update(req.params.id, new Caseregister(req.body), function(err, employee) {
//    if (err)
//    res.send(err);
//    res.json({ error:false, message: 'Caseregister successfully updated' });
// });
// }
// };


// exports.delete = function(req, res) {
// Caseregister.delete( req.params.id, function(err, employee) {
//   if (err)
//   res.send(err);
//   res.json({ error:false, message: 'Caseregister successfully deleted' });
// });
// };