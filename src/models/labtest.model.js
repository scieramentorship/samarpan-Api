'use strict';
var dbConn = require('../db');

//Labtest object create
var Labtest = function(labtest){

   
  this.test_name     = labtest.test_name;
  this.test_desc     = labtest.test_desc;
  this.span     = labtest.span;
  this.normal_values     = labtest.normal_values;
  this.isActiveStatus    = labtest.isActiveStatus ? labtest.isActiveStatus : 1;
  
};

Labtest.create = function (newOrg, result) {
dbConn.query("INSERT INTO Lab_test_master set ?", newOrg, function (err, res) {
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


Labtest.findById = function (id, result) {
dbConn.query("Select * from Lab_test_master where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};


Labtest.findAll = function (result) {
dbConn.query("Select * from Lab_test_master", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('labtest : ', res);
  result(null, res);
}
});
};




   
    




Labtest.update = function(id, labtest, result){
dbConn.query("UPDATE Lab_test_master SET test_name=?,test_desc=?,span=?,normal_values=?,isActiveStatus=? WHERE id = ?", [labtest.test_name,labtest.test_desc,labtest.span,labtest.normal_values,,labtest.isActiveStatus,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Labtest.delete = function(id, result){
dbConn.query("DELETE FROM Lab_test_master WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= Labtest;