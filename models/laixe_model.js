const db = require('../util/database');

var laixeModel = {}

laixeModel.getChuyenXe = (manhanvien, ngay, result) => {
  var sql = " SELECT  chuyenxe.MaChuyen, tuyenxe.MaTuyen, phancong.MaNhanVien, c.TenTinh as TenTinhDi, a.TenDiemDung as TenDiemDi, d.TenTinh as TenTinhDen, b.TenDiemDung as TenDiemDen, " +
    " thoigian.ThoiGianDi, thoigian.ThoiGianDen, thoigian.GiaVe, chuyenxe.Ngay, chuyenxe.TinhTrangDiChuyen, chuyenxe.ThoiGianKhoiHanh, chuyenxe.ThoiGianDenBen from " +
    " chuyenxe INNER JOIN tuyenxe ON chuyenxe.MaTuyen = tuyenxe.MaTuyen LEFT join diemdung as " +
    " a on tuyenxe.MaDiemDi = a.MaDiemDung LEFT join diemdung as b on tuyenxe.MaDiemDen = b.MaDiemDung inner JOIN thoigian " +
    " on tuyenxe.MaThoiGian = thoigian.MaThoiGian INNER JOIN tinh as c on a.MaTinh = c.MaTinh INNER JOIN tinh as d on b.MaTinh = " +
    " d.MaTinh INNER JOIN phancong ON chuyenxe.MaChuyen = phancong.MaChuyen Where chuyenxe.Ngay = '" + ngay + "' AND phancong.MaNhanVien = " + manhanvien
  try {
    db.query(sql, (err, response) => {
      if (err) {
        console.log(err)
        return result(err, null)
      }
      else {
        console.log('getChuyenDiTaixe thanh cong')
        return result(null, response)
      }
    })
  } catch (error) {
    return result(error, null)
  }
}

laixeModel.khoihanh = (machuyen, thoigiandi, result) => {
  let sql = "UPDATE `chuyenxe` SET `TinhTrangDiChuyen` = '1', `ThoiGianKhoiHanh` = '" + thoigiandi + "' WHERE `MaChuyen` = " + machuyen
  let sql1 = "UPDATE `datvexe` SET `TinhTrangVe` = '1' WHERE `MaChuyen` = " + machuyen
  try {
    db.query(sql, (err, response) => {
      if (err) {
        console.log(err)
        return result(err, null)
      }
      else {
        try {
          db.query(sql1, (err, response) => {
            if (err) {
              return result(error, null)
            } else {
              return result(null, 'Khởi hành thành công')
            }
          })
        } catch  (error) {
          return result(error, null)
        }
      }
    })
  } catch (error) {
    return result(error, null)
  }
}

laixeModel.veben = (machuyen, thoigianden, result) => {
  let sql = "UPDATE `chuyenxe` SET `TinhTrangDiChuyen` = '2', `ThoiGianDenBen` = '" + thoigianden + "' WHERE `MaChuyen` = " + machuyen
  try {
    db.query(sql, (err, response) => {
      if (err) {
        console.log(err)
        return result(err, null)
      }
      else {
        return result(null, 'Về bến thành công')
    }
    })
  } catch (error) {
    return result(error, null)
  }
}


module.exports = laixeModel