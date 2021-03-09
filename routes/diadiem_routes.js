const express = require('express');
const router = express.Router(); 

const diaDiemController = require('../controllers/diadiem_controller');

router.use('/tinh', diaDiemController.tinh);

module.exports = router;
