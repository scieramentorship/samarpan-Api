'use strict';
var dbConn = require('../db');

//Camps object create
var Camps = function(camps){


  
  this.camp_date=camps.camp_date;
  this.camp_site_name=camps.camp_site_name;
  this.association_name=camps.association_name;
  this.camp_start_date=camps.camp_start_date;
  this.camp_end_date=camps.camp_end_date;
  this.isActiveStatus=camps.isActiveStatus ? camps.isActiveStatus : 1;
  this.organisation_id=camps.organisation_id;
  this.location_id=camps.location_id; 
};

Camps.create = function (newCmp, result) {
console.log("camp dataa"+JSON.stringify(newCmp)); 
if(newCmp.organisation_id.length > 1)
{
  var insertarray = [];


  for(let org_id=0;org_id<newCmp.organisation_id.length;org_id++){
    
  insertarray.push([newCmp.camp_date,newCmp.camp_site_name,(newCmp.association_name ? newCmp.association_name : ""),newCmp.camp_start_date,newCmp.camp_end_date,(newCmp.isActiveStatus ? newCmp.isActiveStatus : 1),newCmp.organisation_id[org_id],newCmp.location_id])
    // console.log(newCmp.organisation_id[org_id]);
  
  }
  console.log(insertarray)
}
else{
  console.log("else part");
}


dbConn.query("INSERT INTO camps_details (camp_date,camp_site_name,association_name,camp_start_date,camp_end_date,isActiveStatus,organisation_id,location_id) values ?",[insertarray], function (err, res) {
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
Camps.findById = function (id, result) {
dbConn.query("Select * from camps_details where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Camps.findAll = function (result) {
dbConn.query("Select * from camps_details", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('camps : ', res);
  result(null, res);
}
});
};
Camps.update = function(id, camps, result){
dbConn.query("UPDATE camps_details SET camp_date=?,camp_site_name=?,association_name=?,camp_start_date=?,camp_end_date=?,isActiveStatus=?,organisation_id=?,location_id=? WHERE id = ?", [camps.camp_date,camps.camp_site_name,camps.association_name,camps.camp_start_date,camps.camp_end_date,camps.isActiveStatus,camps.organisation_id,camps.location_id,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Camps.delete = function(id, result){
dbConn.query("DELETE FROM camps_details WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= Camps;