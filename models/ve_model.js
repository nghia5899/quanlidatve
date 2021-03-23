const db = require('../util/database');

const SQL = "SELECT MaDatVe, tuyenxe.MaTuyen, c.TenTinh as TenTinhDi, a.TenDiemDung as TenDiemDi, d.TenTinh as TenTinhDen," + 
  " b.TenDiemDung as TenDiemDen, thoigian.ThoiGianDi, thoigian.ThoiGianDen, thoigian.GiaVe, datvexe.Ngay, datvexe.TinhTrangVe," + 
  " datvexe.MaGhe from datvexe INNER JOIN tuyenxe on datvexe.MaTuyen = tuyenxe.MaTuyen LEFT join diemdung as a on tuyenxe.MaDiemDi" + 
  "\ = a.MaDiemDung LEFT join diemdung as b on tuyenxe.MaDiemDen = b.MaDiemDung inner JOIN thoigian on tuyenxe.MaThoiGian = " + 
  "thoigian.MaThoiGian INNER JOIN tinh as c on a.MaTinh = c.MaTinh INNER JOIN tinh as d on b.MaTinh = d.MaTinh Where SoDienThoai = " 
var veModel = {}

veModel.getVeCuaToi = (sodienthoai, result) => {
  let sql = SQL + sodienthoai + " AND tinhtrangve = 0"
  db.query(sql, (err, response) => {
    if (err) {
      console.log(err)
      return result(err, null)
    }
    else {
      console.log('GetVeCuaToi thanh cong')
      return result(null, response)
    }
  });
}

veModel.getVeDaHuy = (sodienthoai, result) => {
  let sql = SQL + sodienthoai + " AND tinhtrangve = -1"
    db.query(sql, (err, response) => {
      if (err) {
        return result(err, null)
      }
      else {
        console.log('GetVeDaHuy thanh cong')
        return result(null, response)
      }
    })
}

veModel.getLichSu = (sodienthoai, result) => {
  let sql = SQL + sodienthoai + " AND tinhtrangve = 1"
    db.query(sql, (err, response) => {
      if (err) {
        return result(err, null)
      }
      else {
        console.log('GetLichSu thanh cong')
        return result(null, response)
      }
    })
}

veModel.datve = (matuyen, sodienthoai, ngay, maghe, result) => {
  let sql = "INSERT INTO `datvexe` (`MaDatVe`, `MaTuyen`, `SoDienThoai`, `Ngay`, `MaGhe`, `TinhTrangVe`) "+
    " VALUES (NULL, '"+ matuyen +"', '"+ sodienthoai+"', '"+ ngay+"', '"+ maghe +"', '0')"
  db.query(sql, (err, response) => {
    if (err) {
      console.log(err);
      return result(err, null)
    }
    else {
      console.log('Dat ve thanh cong thanh cong')
      return result(null, response)
    }
  })
}

veModel.huyve = (mave, result) => {
  let sql = "UPDATE `datvexe` SET `TinhTrangVe` = '-1' WHERE `datvexe`.`MaDatVe` = " + mave
  db.query(sql, (err, response) => {
    if (err) {
      console.log(err);
      return result(err, null)
    }
    else {
      console.log('Huy ve thanh cong')
      return result(null, response)
    }
  })
}

module.exports = veModel

