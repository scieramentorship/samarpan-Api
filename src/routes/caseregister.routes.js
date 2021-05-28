const express = require('express')
const router = express.Router()
const caseregisterController =   require('../controllers/caseregister.controller');
// Retrieve all employees
router.get('/', caseregisterController.findAll);
// Create a new employee
router.post('/', caseregisterController.create);
// Retrieve a single employee with id
router.get('/:id', caseregisterController.findById);

// Update a employee with id
// router.put('/:id', caseregisterController.update);
// // Delete a employee with id
// router.delete('/:id', caseregisterController.delete);
module.exports = router