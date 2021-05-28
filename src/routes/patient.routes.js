const express = require('express')
const router = express.Router()
const patientController =   require('../controllers/patient.controller');
// Retrieve all employees
router.get('/', patientController.findAll);
// Create a new employee
router.post('/', patientController.create);
// Retrieve a single employee with id
router.get('/:id', patientController.findById);
// Update a employee with id
router.put('/:id', patientController.update);
// Delete a employee with id
router.delete('/:id', patientController.delete);
module.exports = router