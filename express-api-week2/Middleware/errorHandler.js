function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
        error: err.message || 'Internal Server Error'
    });
}

module.exports = errorHandler;

// This error handler middleware catches errors thrown in the application,
// logs them to the console, and sends a JSON response with the error message