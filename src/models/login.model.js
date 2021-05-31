'use strict';
var dbConn = require('../db');
const md5 = require('md5');
//Logins object create
var Logins = function(logins){
  
  this.user_name=logins.user_name;
  this.email_id=logins.email_id;
  this.password=md5(logins.password);
  this.ACTIVE=logins.ACTIVE ? logins.ACTIVE : 1;
  this.role_id=logins.role_id; 
};

Logins.create = function (newLoc, result) {
//    console.log("pass"+newLoc.password)
    // newLoc.password=md5(newLoc.password)
    // console.log("encr"+newLoc.password)

    dbConn.query("INSERT INTO users set ?", newLoc, function (err, res) {
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



    Logins.authenticateUser = function (user_name,password, result) {
        // const sql = dbConn.format("Select * from users where user_name = ? and password =?",[user_name,md5(password)]); console.log(sql);
        dbConn.query("Select * from users where user_name = ? and password =?",[user_name,md5(password)], function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
         console.log(res)  
          result(null, res);
        }
        });
        };
        
        

Logins.findById = function (id, result) {
dbConn.query("Select * from users where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Logins.findAll = function (result) {
dbConn.query("Select * from users", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('logins : ', res);
  result(null, res);
}
});
};
Logins.update = function(id, logins, result){
dbConn.query("UPDATE users SET user_name=?,email_id=?,password=?,ACTIVE=?,role_id=? WHERE id = ?", [logins.user_name,logins.email_id,logins.password,logins.ACTIVE,logins.role_id,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Logins.delete = function(id, result){
dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};


module.exports= Logins;