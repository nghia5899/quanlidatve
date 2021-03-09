const db = require('../util/database');

module.exports = {
	getTinh: (req, res) => {
		let sql = "SELECT * FROM tinh";
		db.query(sql, (err, response) => {
			if (err)
				res.json({
					status: false,
					message: err.toString(),
					data: response,
				});
			console.log(req.query);
			res.json({
				status: true,
				data: response,
			});
		});
	},
	getdiemdung: (req, res) => {
		var matinh = req.query.matinh;
		let sql = "SELECT * FROM diemdung WHERE MaTinh = ?";
		db.query(sql, matinh, (err, response) => {
			if (err)
				res.json({
					status: false,
					message: err.toString(),
					data: response,
				});
			console.log(req.query);
			res.json({
				status: true,
				data: response,
			});
		});
	},
  

}

