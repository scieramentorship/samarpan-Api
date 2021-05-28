const express = require('express')
const router = express.Router()

const companyRouter = require ('./company.routes')
const dashboardRouter = require ('./dashboard.route')
const campsRouter = require ('./camps.routes')
const locationRouter = require ('./location.routes')
const organisationRouter = require ('./oraganisation.routes')
const medicinesRouter = require ('./medicines.routes')
const labtestRouter = require ('./labtest.routes')
const patientRouter = require ('./patient.routes')
const caseregisterRouter = require ('./caseregister.routes')


// router.use('/company', companyRouter)
router.use('/dashboard', dashboardRouter)
router.use('/camps', campsRouter)
router.use('/location', locationRouter)
router.use('/organisation', organisationRouter)
router.use('/medicines', medicinesRouter)
router.use('/labtest', labtestRouter)
router.use('/patient', patientRouter)
router.use('/casesheet', caseregisterRouter)



module.exports = router

