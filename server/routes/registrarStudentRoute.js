const express = require('express');
const { registrarFeesController, getRegistrarFees } = require('../controllers/registrarFeesController');

const router = express.Router();


router.post('/student-fees-data', registrarFeesController);
router.get('/student-fees-data', getRegistrarFees);


module.exports = router;
