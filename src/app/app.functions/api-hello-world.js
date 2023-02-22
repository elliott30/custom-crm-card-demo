//helloWorld.js

exports.main = function(context, callback) {
    callback({
        statusCode: 200,
        body: {message: "Hello World - is this the one?"}
    });
}