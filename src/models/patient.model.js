'use strict';
var dbConn = require('../db');

//Patient object create
var Patient = function(patient){

    id, patient_name, age, place, sex, Phone_number, createdAt, updatedAt
   
  this.patient_name = patient.patient_name;
  this.age = patient.age;
  this.place     = patient.place;
  this.sex     = patient.sex;
  this.Phone_number     = patient.Phone_number;
//   this.span     = patient.span;
//   this.isActiveStatus    = patient.isActiveStatus ? patient.isActiveStatus : 1;
  
};

Patient.create = function (newOrg, result) {
dbConn.query("INSERT INTO patient_master set ?", newOrg, function (err, res) {
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


Patient.findById = function (id, result) {
dbConn.query("Select * from patient_master where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};


Patient.findAll = function (result) {
dbConn.query("Select * from patient_master", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('patient : ', res);
  result(null, res);
}
});
};




   
    




Patient.update = function(id, patient, result){
dbConn.query("UPDATE patient_master SET patient_name=?,age=?,place=?,sex=?,Phone_number=? WHERE id = ?", [patient.patient_name,patient.age,patient.place,patient.sex,patient.Phone_number,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Patient.delete = function(id, result){
dbConn.query("DELETE FROM patient_master WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= Patient;