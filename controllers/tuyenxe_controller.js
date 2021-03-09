class TuyenXeController {
  tuyenxe(req, res) {
    res.json({
      'status': true,
    });
  }
}

module.exports = new TuyenXeController;