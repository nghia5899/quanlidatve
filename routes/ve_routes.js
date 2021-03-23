const express = require('express');
const Route = require('express/lib/router/route');
const router = express.Router(); 

const veController = require('../controllers/ve_controller');

router.use('/vecuatoi',veController.vecuatoi)

router.use('/vedahuy', veController.vedahuy)

router.use('/lichsu', veController.lichsu)

router.use('/datve', veController.datve)

router.use('/huyve', veController.huyve)

module.exports = router;
