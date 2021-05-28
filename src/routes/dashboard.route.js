const express = require('express')
const router = express.Router()
const dashboardController =   require('../controllers/dashboard.controller');

router.get('/', dashboardController.findAll);
router.get('/camps_conducted', dashboardController.findCount);
router.get('/camps_scheduled', dashboardController.findActive);
router.get('/patients_screened', dashboardController.findPatientCount);
router.get('/patients_genderwise', dashboardController.findPatientByGender);
router.get('/patients_division', dashboardController.findPatientByDivision);
router.get('/patients_new', dashboardController.findPatientNew);
router.get('/patients_Agewise', dashboardController.findPatientByAge);
router.get('/Top_camps', dashboardController.findTopCamps);
router.get('/camp_calender', dashboardController.findScheduledCampDetails);



// router.get('/:id', dashboardController.findById);

// router.get('/affectedgeos/:startDate/:endDate', dashboardController.findByDate);

// router.get('/affectedgeos/monthwise/:startDate/:endDate/:prestartDate/:preendDate', dashboardController.findByMonth);

// router.get('/affectedgeos/statewise/:startDate/:endDate', dashboardController.findByState);

// router.get('/monthlayoffcompare/:startDatecurmonth/:endDatecurmonth/:startDateprevmonth/:endDateprevmonth', dashboardController.monthlylayoffcomapare);



module.exports = router