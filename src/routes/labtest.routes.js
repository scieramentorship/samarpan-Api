const express = require('express')
const router = express.Router()
const labtestController =   require('../controllers/labtest.controller');
// Retrieve all employees
router.get('/', labtestController.findAll);
// Create a new employee
router.post('/', labtestController.create);
// Retrieve a single employee with id
router.get('/:id', labtestController.findById);
// Update a employee with id
router.put('/:id', labtestController.update);
// Delete a employee with id
router.delete('/:id', labtestController.delete);
module.exports = router