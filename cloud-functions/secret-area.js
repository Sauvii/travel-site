exports.handler = function(event, context, callback){
    callback (null, {
        status: 200,
        body: "Welcome to Hidden message."
    })
}