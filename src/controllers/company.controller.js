'use strict';
const Company = require('../models/company.model');



exports.findAll = function(req, res) {
Company.findAll(function(err, company) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', company);
  res.send(company);
});
};



exports.findById = function(req, res) {
Company.findById(req.params.id, function(err, company) {
  if (err)
  res.send(err);
  res.json(company);
});

};

