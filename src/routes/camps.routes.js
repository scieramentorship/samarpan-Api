const express = require('express')
const router = express.Router()
const campsController =   require('../controllers/camps.controller');
// Retrieve all employees
router.get('/', campsController.findAll);
// Create a new employee
router.post('/', campsController.create);
// Retrieve a single employee with id
router.get('/:id', campsController.findById);
// Update a employee with id
router.put('/:id', campsController.update);
// Delete a employee with id
router.delete('/:id', campsController.delete);
module.exports = router