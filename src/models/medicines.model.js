'use strict';
var dbConn = require('../db');

//Medicine object create
var Medicine = function(medicine){

   
  this.medicine_name     = medicine.medicine_name;
  this.medicine_desc     = medicine.medicine_desc;
  this.medicine_type     = medicine.medicine_type;
  this.usage     = medicine.usage;
  this.dosage     = medicine.dosage;
  this.span     = medicine.span;
  this.isActiveStatus    = medicine.isActiveStatus ? medicine.isActiveStatus : 1;
  
};

Medicine.create = function (newOrg, result) {
dbConn.query("INSERT INTO medication_master set ?", newOrg, function (err, res) {
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


Medicine.findById = function (id, result) {
dbConn.query("Select * from medication_master where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};


Medicine.findAll = function (result) {
dbConn.query("Select * from medication_master", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('medicine : ', res);
  result(null, res);
}
});
};




   
    




Medicine.update = function(id, medicine, result){
dbConn.query("UPDATE medication_master SET medicine_name=?,medicine_desc=?,medicine_type=?,usage=?,dosage=?,span=?,isActiveStatus=? WHERE id = ?", [medicine.medicine_name,medicine.medicine_desc,medicine.medicine_type,medicine.usage,medicine.dosage,medicine.span,medicine.isActiveStatus,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Medicine.delete = function(id, result){
dbConn.query("DELETE FROM medication_master WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= Medicine;