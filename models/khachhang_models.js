const db = require('../util/database');

var khachHangModel = {}

khachHangModel.getThongTin = (sodienthoai, result) => {
  let sql = "SELECT * FROM khachhang where sodienthoai = " + sodienthoai
  db.query(sql, (err, response) => {
    if (err) {
      console.log(err) 
      return result(err, null)
    }
    else {
      console.log('GetThongTin thanh cong')
      return result(null, response)
    }
  });
}

module.exports = khachHangModel