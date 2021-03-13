const express = require('express');
const router = express.Router(); 

const veController = require('../controllers/ve_controller');

router.use('/vecuatoi',veController.vecuatoi);

router.use('/vedahuy', veController.vedahuy);

router.use('/lichsu', veController.lichsu);

module.exports = router;
