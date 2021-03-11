const db = require('../util/database');

var diaDiemModel = {}

diaDiemModel.getTuyenXe = (madiemdi, madiemden, result) => {
  let sql = "SELECT MaTuyen, MaDiemDi, a.TenDiemDung as TenDiemDi, MaDiemDen, b.TenDiemDung as TenDiemDen,"
            +" thoigian.thoigiandi, thoigian.thoigianden, thoigian.giave, thoigian.socho " 
            +" from tuyenxe LEFT join diemdung as a on tuyenxe.MaDiemDi = a.MaDiemDung"
            +" LEFT join diemdung as b on tuyenxe.MaDiemDen = b.MaDiemDung  inner JOIN thoigian on tuyenxe.mathoigian = thoigian.mathoigian ";
  db.query(sql, (err, response) => {
    
    if (err) {
      console.log(err);
      return result(err, null)
    }
    else {
      console.log(response);
      return result(null, response);
    }
  });
}

module.exports = diaDiemModel;