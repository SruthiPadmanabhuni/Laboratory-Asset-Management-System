const errorHandler = (err, req, res, next) => {
    if(res.statusCode === 400) {
        res.status(400).json({
            Title: "Bad Request",
            Message: err.message
        });
    }
    else if(res.statusCode === 404) {
        res.status(404).json({
            Title: "Not Found",
            Message: err.message
        });
    }
};

module.exports = errorHandler;