const tuyenxeRoutes = require('./tuyenxe_routes')
const diaDiemRoutes = require('./diadiem_routes')
const khachHangroutes = require('./khachhang_routes')

function route(app) {

    app.use('/tuyenxe', tuyenxeRoutes)

    app.use('/tinh', diaDiemRoutes)

    app.use('/thongtin', khachHangroutes)

    app.get('/', (req, res) => {
        console.log('Index');
    });
    
}

module.exports = route;