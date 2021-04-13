const tuyenxeRoutes = require('./tuyenxe_routes')
const diaDiemRoutes = require('./diadiem_routes')
const khachHangRoutes = require('./khachhang_routes')
const authenRoutes = require('./authen_routes')
const veRoutes = require('./ve_routes')

const authencontroller = require('../controllers/authen_controller')

function route(app) {

    app.use('/tinh', diaDiemRoutes)

    app.use('/tuyenxe', tuyenxeRoutes)

    app.use('/login', authenRoutes)

    app.use(authencontroller.tokencheck)

    app.use('/thongtin', khachHangRoutes)

    app.use('/ve', veRoutes)

    app.get('/', (req, res) => {
        console.log('Index')
    })
    
}

module.exports = route;