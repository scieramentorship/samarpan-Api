'use strict';
var dbConn = require('../db');

//Caseregister object create
var Caseregister = function(caseregister){


  
  this.NAME=caseregister.NAME;
  this.DATE=caseregister.DATE;
  this.PLACE=caseregister.PLACE;
  this.BLOCK=caseregister.BLOCK;
  this.AGE=caseregister.AGE;
  this.SEX=caseregister.SEX;
  this.PHONE_NO=caseregister.PHONE_NO;
  this.HT=caseregister.HT;
  this.WT=caseregister.WT;
  this.WC=caseregister.WC;
  this.RBS=caseregister.RBS;
  this.FBS=caseregister.FBS;
  this.PPBS=caseregister.PPBS;
  this.SBP1=caseregister.SBP1;
  this.DBP1=caseregister.DBP1;
  this.SBP2=caseregister.SBP2;
  this.DBP2=caseregister.DBP2;
  this.DM=caseregister.DM;
  this.DM_DURATION=caseregister.DM_DURATION;
  this.DM_TRT=caseregister.DM_TRT;
  this.DM_FHO=caseregister.DM_FHO;
  this.HTN=caseregister.HTN;
  this.HTN_DURATION=caseregister.HTN_DURATION;
  this.HTN_TRT=caseregister.HTN_TRT;
  this.HTN_FHO=caseregister.HTN_FHO;
  this.CKD=caseregister.CKD;
  this.CKD_DURATION=caseregister.CKD_DURATION;
  this.CKD_TRT=caseregister.CKD_TRT;
  this.CKD_FHO=caseregister.CKD_FHO;
  this.OBSERVATION1=caseregister.OBSERVATION1;
  this.INV=caseregister.INV;
  this.patient_master_id=caseregister.patient_master_id;
  this.medication_id=caseregister.medication_id;
  this.lab_test_id=caseregister.lab_test_id;
  this.camps_detail_id=caseregister.camps_detail_id;
};

Caseregister.create = function (newCmp, result) {
dbConn.query("INSERT INTO casetemp set ?", newCmp, function (err, res) {
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
Caseregister.findById = function (id, result) {
dbConn.query("Select * from casetemp where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Caseregister.findAll = function (result) {
dbConn.query("Select * from casetemp", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('caseregister : ', res);
  result(null, res);
}
});
};

// Caseregister.update = function(id, caseregister, result){
// dbConn.query("UPDATE casetemp SET camp_date=?,camp_site_name=?,association_name=?,camp_start_date=?,camp_end_date=?,isActiveStatus=?,organisation_id=?,location_id=? WHERE id = ?", [caseregister.camp_date,caseregister.camp_site_name,caseregister.association_name,caseregister.camp_start_date,caseregister.camp_end_date,caseregister.isActiveStatus,caseregister.organisation_id,caseregister.location_id,id], function (err, res) {
// if(err) {
//   console.log("error: ", err);
//   result(null, err);
// }else{
//   result(null, res);
// }
// });
// };

// Caseregister.delete = function(id, result){
// dbConn.query("DELETE FROM casetemp WHERE id = ?", [id], function (err, res) {
// if(err) {
//   console.log("error: ", err);
//   result(null, err);
// }
// else{
//   result(null, res);
// }
// });
// };


module.exports= Caseregister;