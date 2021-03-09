const tuyenxeRoutes = require('./tuyenxe_routes');
const diaDiemRoutes = require('./diadiem_routes');

function route(app) {

    app.get('/tuyenxe', tuyenxeRoutes);

    app.get('/tinh', diaDiemRoutes);

    app.get('/', (req, res) => {
        console.log('Index');
    });

}

module.exports = route;