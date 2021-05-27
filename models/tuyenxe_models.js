const db = require('../util/database');

var diaDiemModel = {}

diaDiemModel.getTuyenXe = (madiemdi, madiemden, ngay, result) => {
  let sql = "SELECT MaTuyen, MaDiemDi, a.TenDiemDung as TenDiemDi, MaDiemDen, b.TenDiemDung as TenDiemDen,"
    +" thoigian.thoigiandi, thoigian.thoigianden, thoigian.giave, thoigian.socho " 
    +" from tuyenxe LEFT join diemdung as a on tuyenxe.MaDiemDi = a.MaDiemDung"
    +" LEFT join diemdung as b on tuyenxe.MaDiemDen = b.MaDiemDung  inner JOIN thoigian on tuyenxe.mathoigian = thoigian.mathoigian"
    +" Where MaDiemDi = "+madiemdi+ " and MaDiemDen =" + madiemden 
  try {
    db.query(sql, (err, response) => {
      if (err) {
        console.log(err)
        return result(err, null)  
      }
      else {
        console.log('GetTuyenXe thanh cong')
        return result(null, response)
      }
    })
  } catch (e) {
    return result(e, null)
  }
}

diaDiemModel.getTinhTrangGhe = (machuyen, result) => {
  let sql = "SELECT datvexe.MaDatVe, chuyenxe.MaChuyen, chuyenxe.Ngay, MaGhe, ThanhToan, LenXe FROM `datvexe` INNER JOIN chuyenxe on " +
    "datvexe.MaChuyen = chuyenxe.MaChuyen WHERE datvexe.MaChuyen = " + machuyen + " AND TinhTrangVe = 0"
  try {
    db.query(sql, (err, response) => {
      if (err) {
        console.log(err)
        return result(err, null)
      }
      else {
        console.log('GetTinhTrangGhe thanh cong' )
        return result(null, response)
      }
    });
  } catch (error) {
    return result(error, null)
  }
}

diaDiemModel.getTinhTrangGheDriver = (machuyen, result) => {
  let sql = "SELECT datvexe.MaDatVe, chuyenxe.MaChuyen, chuyenxe.Ngay, MaGhe, ThanhToan, LenXe FROM `datvexe` INNER JOIN chuyenxe on " +
    "datvexe.MaChuyen = chuyenxe.MaChuyen WHERE datvexe.MaChuyen = " + machuyen + " AND LenXe = 0"
  try {
    db.query(sql, (err, response) => {
      if (err) {
        console.log(err)
        return result(err, null)
      }
      else {
        console.log('GetTinhTrangGheDriver thanh cong' )
        return result(null, response)
      }
    });
  } catch (error) {
    return result(error, null)
  }
}

diaDiemModel.getChuyenXe = (madiemdi, madiemden, ngay, result) => {
  let sql = "SELECT MaChuyen ,tuyenxe.MaTuyen, MaDiemDi, a.TenDiemDung as TenDiemDi, MaDiemDen, b.TenDiemDung as TenDiemDen, " +
    " thoigian.thoigiandi, thoigian.thoigianden, thoigian.giave, thoigian.socho , chuyenxe.Ngay" +
    " from tuyenxe LEFT join diemdung as a on tuyenxe.MaDiemDi = a.MaDiemDung" +
    " LEFT join diemdung as b on tuyenxe.MaDiemDen = b.MaDiemDung  inner JOIN thoigian on " +
    " tuyenxe.mathoigian = thoigian.mathoigian INNER JOIN chuyenxe ON tuyenxe.MaTuyen = chuyenxe.MaTuyen" +
    " Where MaDiemDi = " + madiemdi + " and MaDiemDen = " + madiemden + " and chuyenxe.Ngay = '"+ ngay +"'"
  try {
    db.query(sql, (err, response) => {
      if (err) {
        console.log(err)
        return result(err, null)  
      }
      else {
        console.log(response)
        console.log('Get ChuyenXe thanh cong')
        return result(null, response)
      }
    })
  } catch (e) {
    return result(e, null)
  }
}

module.exports = diaDiemModel