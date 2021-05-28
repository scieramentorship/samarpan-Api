const express = require('express')
const router = express.Router()
const organisationController =   require('../controllers/organisation.controller');
// Retrieve all employees
router.get('/', organisationController.findAll);
// Create a new employee
router.post('/', organisationController.create);
// Retrieve a single employee with id
router.get('/:id', organisationController.findById);
// Update a employee with id
router.put('/:id', organisationController.update);
// Delete a employee with id
router.delete('/:id', organisationController.delete);
module.exports = router