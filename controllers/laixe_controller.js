const laixeModel = require('../models/laixe_model')

class LaiXeController {
	getChuyenXe(req, res) {
		console.log("ngay" + req.query.ngay)
		var ngay = req.query.ngay
		var manhanvien = req.decoded.data.manhanvien
		laixeModel.getChuyenXe(manhanvien, ngay, function(err, response) {
			if (err) {
				res.json({
					status: false,
					message: err.toString(),
				})
			}
			else {
				console.log('get chuyen xe thanh cong')
				res.json({
					status: true,
					data: response,
				})
			}
		})
	}

	khoihanh(req, res) {
		var thoigiandi = req.body.thoigiandi
		var machuyen = req.body.machuyen
		laixeModel.khoihanh(machuyen, thoigiandi, function(err, response) {
			if (err) {
				res.json({
					status: false,
					message: 'Khởi hành thất bại',
				})
			}
			else {
				console.log('khoi hanh thanh cong')
				res.json({
					status: true,
					message: response,
				})
			}
		})
	}

	veben(req, res) {
		var thoigianden = req.body.thoigianden
		var machuyen = req.body.machuyen
		laixeModel.veben(machuyen, thoigianden, function(err, response) {
			if (err) {
				res.json({
					status: false,
					message: 'Về bến thất bại',
				})
			}
			else {
				console.log('ve ben thanh cong')
				res.json({
					status: true,
					message: response,
				})
			}
		})
	}
}

module.exports = new LaiXeController