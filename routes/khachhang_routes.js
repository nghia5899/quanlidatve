const express = require('express');
const router = express.Router(); 

const khachHangController = require('../controllers/khachhang_controller');

router.use('/', khachHangController.thongtin);

module.exports = router;
