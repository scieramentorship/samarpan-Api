'use strict';
var dbConn = require('../db');

//Organisation object create
var Organisation = function(organisation){

  this.organisation_name     = organisation.organisation_name;
  this.address     = organisation.address;
  this.phone_no     = organisation.phone_no;
  this.contact_person     = organisation.contact_person;
  this.email_id     = organisation.email_id;
  this.isActiveStatus    = organisation.isActiveStatus ? organisation.isActiveStatus : 1;
  
};

Organisation.create = function (newOrg, result) {
dbConn.query("INSERT INTO organisation_master set ?", newOrg, function (err, res) {
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


Organisation.findById = function (id, result) {
dbConn.query("Select * from organisation_master where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};


Organisation.findAll = function (result) {
dbConn.query("Select * from organisation_master", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('organisation : ', res);
  result(null, res);
}
});
};




   
    




Organisation.update = function(id, organisation, result){
dbConn.query("UPDATE organisation_master SET organisation_name=?,address=?,phone_no=?,contact_person=?,email_id=?,isActiveStatus=? WHERE id = ?", [organisation.organisation_name,organisation.address,organisation.phone_no,organisation.contact_person,organisation.email_id,organisation.isActiveStatus,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Organisation.delete = function(id, result){
dbConn.query("DELETE FROM organisation_master WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= Organisation;