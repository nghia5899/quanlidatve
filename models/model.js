const db = require('../util/database.js');

module.exports = class Tinh {
	constructor(matinh, ten) {
		this.matinh = matinh;
		this.ten = ten;
	}

	static fetchAll() {
		return db.execute('SELECT * FROM `tinh');
	}
}