exports.get404 = (req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
}

exports.get500 = (err, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: { 
            message: err.message,
        }
    })
}