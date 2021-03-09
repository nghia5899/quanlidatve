const express = require('express');
const router = express.Router(); 

const tuyenXeController = require('../controllers/tuyenxe_controller');

router.use('/tuyenxe', tuyenXeController.tuyenxe);

module.exports = router;