'use strict';
const Logins = require('../models/login.model');

let data={};

exports.findAll = function(req, res) {
Logins.findAll(function(err, employee) {
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
const new_employee = new Logins(req.body);
//handles null error
// console.log("hereee"+Object.values(req.body));
if (!req.body.user_name) {
    res.status(400).send({status:400,message: "user_name can not be empty!" });
  }


else{
Logins.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({status:200,error:false,message:"user added successfully!",data:employee});
});
}
};





exports.authenticateUser = function(req, res) {
    Logins.authenticateUser(req.body.user_name,req.body.password, function(err, user) {
        if (err)
        res.send(err);
        if(user.length!=0)
        {
        data["message"]="user exists";
        data["status"]="200";
        res.send(data);
        }
        else{
        data["message"]="not a valid user";
        data["status"]="400";
        res.send(data);
        }
    });
    };


exports.findById = function(req, res) {
Logins.findById(req.params.id, function(err, employee) {
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
    Logins.update(req.params.id, new Logins(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Logins successfully updated' });
});
}
};


exports.delete = function(req, res) {
Logins.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Logins successfully deleted' });
});
};