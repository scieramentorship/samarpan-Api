'use strict';
var dbConn = require('../db');

//Company object create
var Company = function(company){
  this.company_name         = company.company_name;
  this.standard_companyname = company.standard_companyname;
  this.created_at           = new Date();
  this.updated_at           = new Date();
  this.isStatus             = company.isStatus ? company.isStatus : 1;
};

Company.findById = function (id, result) {
  dbConn.query("Select * from company where id = ? ", id, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
  };

Company.findAll = function (result) {
  dbConn.query("Select * from company", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('company : ', res);
    result(null, res);
  }
  });
  };

module.exports= Company;