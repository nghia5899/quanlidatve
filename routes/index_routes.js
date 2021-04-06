const tuyenxeRoutes = require('./tuyenxe_routes')
const diaDiemRoutes = require('./diadiem_routes')
const khachHangRoutes = require('./khachhang_routes')
const veRoutes = require('./ve_routes')

function route(app) {

    app.use('/tuyenxe', tuyenxeRoutes)

    app.use('/tinh', diaDiemRoutes)

    app.use('/thongtin', khachHangRoutes)

    app.use('/ve', veRoutes)

    app.get('/', (req, res) => {
        console.log('Index')
    })
    
}

module.exports = route;