const db = require('../util/database');

var diaDiemModel = {}

diaDiemModel.getTuyenXe = (madiemdi, madiemden, result) => {
  let sql = "SELECT MaTuyen, MaDiemDi, a.TenDiemDung as TenDiemDi, MaDiemDen, b.TenDiemDung as TenDiemDen,"
            +" thoigian.thoigiandi, thoigian.thoigianden, thoigian.giave, thoigian.socho " 
            +" from tuyenxe LEFT join diemdung as a on tuyenxe.MaDiemDi = a.MaDiemDung"
            +" LEFT join diemdung as b on tuyenxe.MaDiemDen = b.MaDiemDung  inner JOIN thoigian on tuyenxe.mathoigian = thoigian.mathoigian"
            +" Where MaDiemDi = "+madiemdi+ " and MaDiemDen =" + madiemden;
  db.query(sql, (err, response) => {
    if (err) {
      console.log(err);
      return result(err, null)
    }
    else {
      console.log('GetTuyenXe thanh cong');
      return result(null, response);
    }
  });
}

diaDiemModel.getTinhTrangGhe = (matuyen, ngay, result) => {
  let sql = "SELECT MaTuyen, Ngay, MaGhe FROM `datvexe` WHERE Matuyen = " + matuyen + " AND Ngay = '" + ngay + "'"
  console.log(sql);
  db.query(sql, (err, response) => {
    if (err) {
      console.log(err)
      return result(err, null)
    }
    else {
      console.log('GetTinhTrangGhe thanh cong')
      return result(null, response)
    }
  });
}

module.exports = diaDiemModel