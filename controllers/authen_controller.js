const authen_model = require('../models/authen_model')
const veryfytoken = require('../util/veryfytoken')

class AuthenController {
	login(req, res) {
		var sodienthoai = req.body.sodienthoai
		var matkhau = req.body.MatKhau
		var nhanvien = req.body.nhanvien
		if (!nhanvien) {
			authen_model.login(sodienthoai, matkhau, function(err, response) {
				if (err) {
					res.json({
						status: false,
						message: "Đăng nhập không thành công",
					});
				}
				else {
					if (response.length == 0) {
						res.json({
							status: false,
							message: 'Tài khoản hoặc mạt khẩu không đúng',
							data: response,
						})
					}  
					else {
						console.log("Đăng nhập thành công")
						res.json({
							status: true,
							message: "Đăng nhập thành công",
							data: response
						})
					}
				}
			})
		} else {
			authen_model.loginDriver(sodienthoai, matkhau, function(err, response) {
				if (err) {
					res.json({
						status: false,
						message: "Đăng nhập không thành công",
					});
				}
				else {
					if (response.length == 0) {
						res.json({
							status: false,
							message: 'Tài khoản hoặc mạt khẩu không đúng',
							data: response,
						})
					}  
					else {
						console.log("Đăng nhập lai xe thành công")
						res.json({
							status: true,
							message: "Đăng nhập thành công",
							data: response
						})
					}
				}
			})
		}
	}

	async tokencheck(req, res, next) {
		const token = req.headers["access-token"]
		if (token) {
			try {
				const decoded = await veryfytoken.veryfytoken(token, process.env.ACCESS_TOKEN_SECRET)
				console.log('sodienthoai  '+ decoded.data.sodienthoai)
				console.log('ma nhan vien ' + decoded.data.manhanvien)
				req.decoded = decoded
				next()
			} catch (error) {
				return res.status(401).json({
					status: false,
					message: 'Unauthorized access'
				})
			}
		} else {
			return res.status(403).json({
				status: false,
				message: 'No token provided'
			})
		}
	}
}

module.exports = new AuthenController
