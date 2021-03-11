const express = require('express');
const router = express.Router(); 

const diaDiemController = require('../controllers/diadiem_controller');

router.use('/diemdung', diaDiemController.diemdung);

router.use('/', diaDiemController.tinh);

module.exports = router;
