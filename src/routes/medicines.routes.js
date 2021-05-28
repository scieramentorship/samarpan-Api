const express = require('express')
const router = express.Router()
const medicineController =   require('../controllers/medicines.controller');
// Retrieve all employees
router.get('/', medicineController.findAll);
// Create a new employee
router.post('/', medicineController.create);
// Retrieve a single employee with id
router.get('/:id', medicineController.findById);
// Update a employee with id
router.put('/:id', medicineController.update);
// Delete a employee with id
router.delete('/:id', medicineController.delete);
module.exports = router