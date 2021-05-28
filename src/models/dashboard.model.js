'use strict';
var dbConn = require('../db');

//Dashboard object create
var Dashboard = function(dashboard){
  this.id ="";
  this.NC ="";
  this.OC ="";
  this.NAME="";
  this.DATE="";
  this.PLACE="";
  this.BLOCK="";
  this.AGE="";
  this.SEX="";
  this.PHONE_NO="";
  this.HT ="";
  this.WT ="";
  this.WC ="";
  this.RBS="";
  this.FBS="";
  this.PPBS="";
  this.SBP1="";
  this.DBP1="";
  this.SBP2="";
  this.DBP2="";
  this.DM ="";
  this.DM_DURATION="";
  this.DM_TRT="";
  this.DM_FHO="";
  this.HTN="";
  this.HTN_DURATION="";
  this.HTN_TRT="";
  this.HTN_FHO="";
  this.CKD="";
  this.CKD_DURATION="";
  this.CKD_TRT="";
  this.CKD_FHO="";
  this.OBSERVATION1="";
  this.OBSERVATION2="";
  this.INV="";
  this.PRESCRIPTION1="";
  this.PRESCRIPTION2="";
  this.PRESCRIPTION3="";
  this.patient_master_id="";
  this.medication_id="";
  this.lab_test_id="";
  this.camps_detail_id="";
};

  // Dashboard.findById = function (id, result) {
  // dbConn.query("Select * from warn_master_new where id = ? ", id, function (err, res) {
  // if(err) {
  //   //console.log("error: ", err);
  //   result(err, null);
  // }
  // else{
  //   result(null, res);
  // }
  // });
  // };



  Dashboard.findAll = function (result) {
  dbConn.query("Select * from casetemp limit 5", function (err, res) {
  if(err) {
    // console.log("error: ", err);
    result(null, err);
  }
  else{
    // console.log('dashboard : ', res);
    result(null, res);
  }
  });
  };



  Dashboard.findCount = function (result) {
    dbConn.query("select count(*) as camps_conducted from camps_details where STR_TO_DATE(camp_date, '%d-%m-%Y') < curdate()", function (err, res) {
    if(err) {
      // console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('dashboard : ', res);
      result(null, res);
    }
    });
    };

    Dashboard.findActive = function (result) {
      dbConn.query("select count(*) as camps_scheduled from camps_details where STR_TO_DATE(camp_date, '%d-%m-%Y') > curdate()", function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        // console.log('dashboard : ', res);
        result(null, res);
      }
      });
      };

      Dashboard.findPatientCount = function (result) {
        dbConn.query("select count(*) as patients_screened from patient_master ", function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          // console.log('dashboard : ', res);
          result(null, res);
        }
        });
        };  

        Dashboard.findPatientByGender = function (result) {
          dbConn.query("select sex,count(*) from patient_master group by 1  having sex!=''", function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
            // console.log('dashboard : ', res);
            result(null, res);
          }
          });
          };  

        
          Dashboard.findPatientByDivision = function (result) {
            dbConn.query("select sum(DM)as diabetes_melitus_screened,sum(htn)as hypertension_screened,sum(ckd)as chronic_kidney_disease_screened  from (select * from casetemp group by patient_master_id)as a", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              // console.log('dashboard : ', res);
              result(null, res);
            }
            });
            };  


            Dashboard.findPatientNew = function (result) {
              dbConn.query("SELECT count(*)as patient_new from patient_master WHERE createdAt >= DATE_SUB(CURDATE(), INTERVAL 3 DAY) ORDER BY createdAt DESC", function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                // console.log('dashboard : ', res);
                result(null, res);
              }
              });
              }; 

             
              Dashboard.findPatientByAge = function (result) {
                dbConn.query("SELECT SUM(IF(age < 20,1,0)) as 'Under 20',SUM(IF(age BETWEEN 20 and 29,1,0)) as '20 - 29',"+
                "SUM(IF(age BETWEEN 30 and 39,1,0)) as '30 - 39',"+
                "SUM(IF(age BETWEEN 40 and 49,1,0)) as '40 - 49',"+
                "SUM(IF(age BETWEEN 50 and 59,1,0)) as '50 - 59',"+
                "SUM(IF(age BETWEEN 60 and 69,1,0)) as '60 - 69',"+
                "SUM(IF(age BETWEEN 70 and 79,1,0)) as '70 - 79',"+
                "SUM(IF(age >=80, 1, 0)) as 'Over 80',"+
                "SUM(IF(age='', 1, 0)) as 'Not Filled In (NULL)' FROM (SELECT  age AS age FROM patient_master) as derived", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  // console.log('dashboard : ', res);
                  result(null, res);
                }
                });
                }; 

            

                Dashboard.findTopCamps = function (result) {
                  dbConn.query("select DATE as camp_date,count(*) as patients_screened from casetemp group by DATE having date!='' order by patients_screened desc limit 10", function (err, res) {
                  if(err) {
                    console.log("error: ", err);
                    result(null, err);
                  }
                  else{
                    // console.log('dashboard : ', res);
                    result(null, res);
                  }
                  });
                  }; 

                  Dashboard.findScheduledCampDetails = function (result) {
                    dbConn.query("select a.*,b.id as locationid,b.location_name,c.id as orgid,c.organisation_name  from camps_details a,location_master b,organisation_master c WHERE a.organisation_id=b.id and a.location_id=c.id and  STR_TO_DATE(camp_date, '%d-%m-%Y')  >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)", function (err, res) {
                    if(err) {
                      console.log("error: ", err);
                      result(null, err);
                    }
                    else{
                      // console.log('dashboard : ', res);
                      result(null, res);
                    }
                    });
                    };


  // Dashboard.findByDate = function (startDate,endDate, result) {
    
  //   dbConn.query("SELECT count(distinct city) as affectedcities,count(distinct state) as affectedstates FROM warn_master_new where formattedLayoffDate between ? and ? ", [startDate,endDate], function (err, res) {
  //   if(err) {
  //     //console.log("error: ", err);
  //     result(err, null);
  //   }
  //   else{
  //     result(null, res);
  //   }
  //   });
  //   };

  //   Dashboard.findByMonth = function (startDate,endDate,prestartDate,preendDate,result) {
    
  //     dbConn.query("select DATE_FORMAT(formattedLayoffDate,'%Y-%m-%d')as datenew,sum(WORKERS_AFFECTED)as layoffcount from warn_master_new group by datenew having datenew between  ? and ?;select DATE_FORMAT(formattedLayoffDate,'%Y-%m-%d')as dateold,sum(WORKERS_AFFECTED)as layoffcountold from warn_master_new group by dateold having dateold between  date_format(DATE_SUB(?, INTERVAL 1 month),'%Y-%m-%d') and date_format(DATE_SUB(?, INTERVAL 1 month),'%Y-%m-%d')", [startDate,endDate,prestartDate,preendDate], function (err, res) {
  //     if(err) {
  //       //console.log("error: ", err);
  //       result(err, null);
  //     }
  //     else{
  //       // console.log("new1",res);
  //       // console.log("new",res[0]);
  //       result(null, res);
        
  //       // console.log("old",res[1]);
  //     }
  //     });
  //     };


  //     Dashboard.findByState = function (startDate,endDate,result) {
    
  //       dbConn.query("select STATE,sum(WORKERS_AFFECTED)as statewisecount,DATE_FORMAT(formattedLayoffDate,'%Y-%m-%d')as LayoffDate FROM warn_master_new where formattedLayoffDate between ? and ? group by STATE", [startDate,endDate], function (err, res) {
  //       if(err) {
  //         //console.log("error: ", err);
  //         result(err, null);
  //       }
  //       else{
  //         result(null, res);
  //           // console.log("new",res[0]);
  //           // console.log("old",res[1]);
  //       }
  //       });
  //       };

  //   Dashboard.monthlylayoffcomapare = function (curmonthStartDate,curmonthEndDate,previousmonthStartDate,previousmonthEndDate, result) {
      
  //     dbConn.query("SELECT sum(workers_affected) as curmonth FROM warn_master_new where formattedLayoffDate between ? and ?;SELECT sum(workers_affected) as prevmonth FROM warn_master_new where formattedLayoffDate between date_format(DATE_SUB(?, INTERVAL 1 month),'%Y-%m-%d') and date_format(DATE_SUB(?, INTERVAL 1 month),'%Y-%m-%d')",[curmonthStartDate,curmonthEndDate,previousmonthStartDate,previousmonthEndDate], function (err, res) {
  //       if(err) {
  //         //console.log("error: ", err);
  //         result(err, null);
  //       }
  //       else{
  //         result(null,res) ;
  //       }
  //       });  
     
  //   };
  
module.exports= Dashboard;