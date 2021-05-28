'use strict';
const Dashboard = require('../models/dashboard.model');


let data={};
exports.findAll = function(req, res) {
Dashboard.findAll(function(err, dashboard) {
  // console.log('controller')
  
  if (err)
  res.send(err);
  data["message"]="ok";
  data["status"]="200";
  data["data"]=dashboard
  res.send(data);
});
};

exports.findCount = function(req, res) {
  Dashboard.findCount(function(err, dashboard) {
    // console.log('controller')
    if (err)
    res.send(err);
    data["message"]="ok";
    data["status"]="200";
    data["data"]=dashboard
    res.send(data);
  });
  };


  exports.findActive = function(req, res) {
    Dashboard.findActive(function(err, dashboard) {
      if (err)
      res.send(err);
      data["message"]="ok";
      data["status"]="200";
      data["data"]=dashboard
      res.send(data);
    });
    };

    exports.findPatientCount = function(req, res) {
      Dashboard.findPatientCount(function(err, dashboard) {
        if (err)
        res.send(err);
        data["message"]="ok";
        data["status"]="200";
        data["data"]=dashboard
        res.send(data);
      });
      };


    exports.findPatientByGender = function(req, res) {
        Dashboard.findPatientByGender(function(err, dashboard) {
          if (err)
          res.send(err);
          data["message"]="ok";
          data["status"]="200";
          data["data"]=dashboard
          res.send(data);
        });
        };
        exports.findPatientByDivision = function(req, res) {
          Dashboard.findPatientByDivision(function(err, dashboard) {
            if (err)
            res.send(err);
            data["message"]="ok";
            data["status"]="200";
            data["data"]=dashboard
            res.send(data);
          });
          };

          exports.findPatientNew = function(req, res) {
            Dashboard.findPatientNew(function(err, dashboard) {
              if (err)
              res.send(err);
              data["message"]="ok";
              data["status"]="200";
              data["data"]=dashboard
              res.send(data);
            });
            };

            exports.findPatientByAge = function(req, res) {
              Dashboard.findPatientByAge(function(err, dashboard) {
                if (err)
                res.send(err);
                data["message"]="ok";
                data["status"]="200";
                data["data"]=dashboard
                res.send(data);
              });
              };


              exports.findTopCamps = function(req, res) {
                Dashboard.findTopCamps(function(err, dashboard) {
                  if (err)
                  res.send(err);
                  data["message"]="ok";
                  data["status"]="200";
                  data["data"]=dashboard
                  res.send(data);
                });
                };

              
                exports.findScheduledCampDetails = function(req, res) {
                  Dashboard.findScheduledCampDetails(function(err, dashboard) {
                    if (err)
                    res.send(err);
                    data["message"]="ok";
                    data["status"]="200";
                    data["data"]=dashboard
                    res.send(data);
                  });
                  };  
          
              
                
      

// exports.findById = function(req, res) {
// Dashboard.findById(req.params.id, function(err, dashboard) {
//   if (err)
//   res.send(err);
//   res.json(dashboard);
// });

// };

// exports.findByDate = function(req, res) {
//   Dashboard.findByDate(req.params.startDate, req.params.endDate, function(err, dashboard) {
//     if (err)
//     res.send(err);
//     res.json(dashboard);
//   });
  
//   };


//   exports.findByState = function(req, res) {
//     console.log("inside");
//     Dashboard.findByState(req.params.startDate, req.params.endDate, function(err, dashboard) {
//       if (err)
//       res.send(err);
//       res.json(dashboard);
//     });
    
//     };

//     exports.findByMonth = function(req, res) {
//       console.log("inside");
//       Dashboard.findByMonth(req.params.startDate, req.params.endDate,req.params.prestartDate,req.params.preendDate, function(err, dashboard) {
//         if (err)
//         res.send(err);
//         res.json(dashboard);
//       });
      
//       };
  

//   exports.monthlylayoffcomapare = function(req, res) {
//     Dashboard.monthlylayoffcomapare(req.params.startDatecurmonth, req.params.endDatecurmonth,req.params.startDateprevmonth, req.params.endDateprevmonth, function(err, dashboard) {
//       if (err)
//       res.send(err);     
      
//       let resultJson = {};
//       let layoffComparePercentage = [];
//       let layoffPercentage;
      
//       dashboard.forEach(function(item, index) {
        
//         item.forEach(function(item, index) {       
            
//           //console.log("out",item)
//           if(item.curmonth!=undefined){
//             //console.log("cur",item.curmonth)
//             resultJson['curMonth']  = item.curmonth;
//           } 

//           if(item.prevmonth!=undefined){
//             //console.log("pre",item.prevmonth)
//             resultJson['prevMont']  = item.prevmonth;
//           }   
//         });
//       });

//       layoffPercentage = relDiff(resultJson.curMonth, resultJson.prevMont);
//       console.log("layoffPercentage--",layoffPercentage);
//       resultJson['percentageDiffernce'] = layoffPercentage;
//       layoffComparePercentage.push(resultJson);
//       //console.log("res",res);
//       //console.log("JSON->",layoffComparePercentage.push(resultJson));
//       res.send(layoffComparePercentage);

//     });
    
    // };

//     function relDiff(a, b) {
//       return ((a-b)/b)*100;      
//      }



