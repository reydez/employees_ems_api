const express = require("express");
const employeeController = require('../controllers/employee')

const router = express.Router()

router.get("/", employeeController.getIndex);
router.get("/employees", employeeController.getEmployee);
router.get("/employees/delta", employeeController.getEmployeeByDate);

module.exports = router;

  