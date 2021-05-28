const express = require('express')
const router = express.Router()
const companyController =   require('../controllers/company.controller');

// Retrieve all employees
router.get('/', companyController.findAll);

// Retrieve a single employee with id
router.get('/:id', companyController.findById);

module.exports = router