const express = require('express')
const router = express.Router()
const locationController =   require('../controllers/location.controller');
// Retrieve all employees
router.get('/', locationController.findAll);

router.get('/city', locationController.findAllCity);

router.get('/state', locationController.findAllState);


// Create a new employee
router.post('/', locationController.create);



// Retrieve a single employee with id
router.get('/:id', locationController.findById);
// Update a employee with id
router.put('/:id', locationController.update);
// Delete a employee with id
router.delete('/:id', locationController.delete);
module.exports = router