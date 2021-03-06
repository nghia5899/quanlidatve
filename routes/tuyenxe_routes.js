const express = require('express');
const router = express.Router(); 

const tuyenXeController = require('../controllers/tuyenxe_controller')

router.use('/tinhtrangghe', tuyenXeController.tinhtrangghe)

router.use('/tinhtrangghedriver', tuyenXeController.tinhtranggheDriver)

router.use('/', tuyenXeController.chuyenxe)

module.exports = router
