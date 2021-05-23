const khachhang_models = require('../models/khachhang_models')

class KhachHangController {
  thongtin(req, res) {
    var sodienthoai = req.decoded.data
    khachhang_models.getThongTin(sodienthoai, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: err.toString(),
        });
      }
      else {
        res.json({
          status: true,
          data: response,
        })
      }
    })
  }

  suathongtin(req, res) {
    var sodienthoai = req.decoded.data.sodienthoai
    var manhanvien = req.decoded.data.manhanvien
    var ten = req.body.Ten
    var email = req.body.Email
    var gioitinh = req.body.GioiTinh
    var matkhau = req.body.MatKhau
    console.log(manhanvien)
    khachhang_models.capNhatThongTin(sodienthoai, ten, email, gioitinh, manhanvien, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: "Cập nhật không thành công",
        })
      }
      else {
        res.json({
          status: true,
          message: "Cập nhật thành công",
          data: response
        })
      }
    })
  }

  doimatkhau(req, res) {
    var sodienthoai = req.decoded.data.sodienthoai
    var matkhau = req.body.matkhau
    khachhang_models.doimatkhau(sodienthoai, matkhau, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: "Đổi mật khẩu không thành công",
        })
      }
      else {
        res.json({
          status: true,
          message: "Đổi mật khẩu thành công",
          data: response
        })
      }
    })
  }

  dangky(req, res) {
    var sodienthoai = req.decoded.data
    var ten = req.body.Ten
    var email = req.body.Email
    var gioitinh = req.body.GioiTinh
    var matkhau = req.body.MatKhau
    khachhang_models.dangky(sodienthoai, ten, email, gioitinh, matkhau, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: "Đăng ký không thành công",
        });
      }
      else {
        res.json({
          status: true,
          message: "Đăng ký thành công",
        });
      }
    })
  }

  dangnhap(req, res) {
    var sodienthoai = req.decoded.data
    var matkhau = req.body.MatKhau
    khachhang_models.dangnhap(sodienthoai, matkhau, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: "Đăng nhập không thành công",
        });
      }
      else {
        if (response.length == 0)
          res.json({
            status: false,
            message: 'Tài khoản hoặc mạt khẩu không đúng',
            data: response,
          });
        else
          res.json({
            status: true,
            message: "Đăng nhập thành công",
            data: response
          });
      }
    })
  }
}

module.exports = new KhachHangController