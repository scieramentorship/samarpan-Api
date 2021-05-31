const express = require('express')
const router = express.Router()
const loginController =   require('../controllers/login.controller');
// Retrieve all employees
router.get('/', loginController.findAll);
// Create a new employee
router.post('/', loginController.create);
// Retrieve a single employee with id
router.get('/:id', loginController.findById);


router.post('/auth', loginController.authenticateUser);

// Update a employee with id
router.put('/:id', loginController.update);
// Delete a employee with id
router.delete('/:id', loginController.delete);
module.exports = router