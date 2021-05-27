const { kiemtrave } = require('../models/ve_model');
const veModel = require('../models/ve_model');

class VeController {
  vecuatoi(req, res) {
    var sodienthoai = req.decoded.data.sodienthoai
    console.log(sodienthoai)
    veModel.getVeCuaToi(sodienthoai, function(err, response) {
        if (err) {
          res.json({
            status: false,
            message: err.toString(),
          });
        }
        else {
          console.log('get ve cua toi thanh cong')
          res.json({
            status: true,
            data: response,
          });
        }
    })
  }
  
  vedahuy(req, res) {
    var sodienthoai = req.decoded.data.sodienthoai
    veModel.getVeDaHuy(sodienthoai, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: err.toString(),
        });
      }
      else {
        console.log('get ve da huy thanh cong')
        res.json({
          status: true,
          data: response,
        });
      }
    })
  }

  lichsu(req, res) {
    var sodienthoai = req.decoded.data.sodienthoai
    veModel.getLichSu(sodienthoai, function(err, response) {
      if (err) {
          res.json({
            status: false,
            message: err.toString(),
          });
        }
      else {
        console.log('get lich su ve thanh cong')
        res.json({
          status: true,
          data: response,
        });
      }
    })
  }

  vecuatoiID(req, res) {
    var sodienthoai = req.decoded.data.sodienthoai
    var madatve = req.query.madatve
    console.log(sodienthoai)
    veModel.getVeCuaToiID(sodienthoai, madatve, function(err, response) {
        if (err) {
          res.json({
            status: false,
            message: err.toString(),
          });
        }
        else {
          console.log('get ve cua toi id thanh cong')
          res.json({
            status: true,
            data: response,
          });
        }
    })
  }

  datve(req, res) {
    var sodienthoai = req.decoded.data.sodienthoai
    var listve = req.body.listve
    var error = false;
    for (var i = 0; i < listve.length; i++) {
      var machuyen = listve[i].MaChuyen
      var maghe = listve[i].MaGhe
      veModel.datve(machuyen, sodienthoai, maghe, function(err, response) {
        error = err
      })
    }
    if (error) {
      console.log('dat ve thanh cong')
      res.json({
        status: false,
        message: "Đặt vé không thành công",
      })
    }
    else {
      console.log('dat ve thanh cong')
      res.json({
        status: true,
        message: "Đặt vé thành công"
    })
    }
  }

  huyve(req, res) {
    var madatve = req.query.madatve
    veModel.huyve(madatve, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: "Lỗi khi huỷ vé",
        })
      }
      else {
        console.log('huy ve thanh cong')
        res.json({
          status: true,
          message: "Huỷ vé thành công"
      })
    }
  })
  }

  scanVe(req, res) {
    var sodienthoai = req.decoded.data.sodienthoai
    var madatve = req.body.madatve
    veModel.scan(madatve, sodienthoai, function(err, response) {
      if (err) {
        res.json({
          status: false,
          message: "Lỗi khi scan QRcode",
        })
      }
      else {
        console.log('scan ve thanh cong')
        res.json({
          status: true,
          message: "Quét mã OR thành công",
          data: response
        })
      }
    })
  }

  kiemtrave(req, res) {
    var mave = req.query.madatve
    var machuyen = req.query.machuyen
    veModel.kiemtrave(mave, machuyen, function(err, response) {
      if (err) {
        console.log('loi khi scan')
        res.json({
          status: false,
          message: "Lõi khi scan"
        })
      } else {
        if (response.length == 0) {
          console.log('ve khong hop le')
          res.json({
            status: false,
            message: "Vé không hợp lê"
          })
        } else {
          console.log('ve hop le')
          res.json({
            status: true,
            message: "Vé hợp lệ"
          })
        }
      }
    })
  } 

  xacnhanthanhtoan(req, res) {
    var madatve = req.query.madatve
    veModel.xacnhanthanhtoan(madatve, function(err, response) {
      if (err) {
        console.log(err)
        res.json({
          status: false,
          message: "Lỗi khi thanh toán vé",
        })
      }
      else {
        console.log('xác nhận thu tiền thành công')
        res.json({
          status: true,
          message: "Xác nhận thanh toán thành công"
      })
    }
    })
  }

}

module.exports = new VeController
