const express = require('express');
const router = express.Router(); 

const khachHangController = require('../controllers/khachhang_controller');

router.post('/dangky', khachHangController.dangky)

router.use('/dangnhap', khachHangController.dangnhap)

router.use('/', khachHangController.thongtin)

module.exports = router;
