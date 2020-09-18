var http = require('http');
var async = require('async'); 

var timestamp = new Date().getTime();
var _path = '/hi?message=HelloFeign' + timestamp;

var options = {
    hostname: '127.0.0.1',
    port: 8081,
    path: _path,
    method: 'GET'
};

function sendRequest(option,n, callback) {
    var req = http.request(option, function (res) {
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log(chunk+"######"+n);
        });
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
        callback(err);
    });
    
    req.end();
}

function sendRequestWrapper(n, done) {
    sendRequest(options,n, function (err) {
        done(err);
    });
};

// for (let index = 0; index < 999; index++) {
//     sendRequestWrapper(index)
// }

 var index = 0;
// let recur = async () => {
//     await sendRequestWrapper(index);
//     index++;
//     recur();
// }

// recur();
// async.timesSeries(10, sendRequestWrapper); 
setInterval(()=>{
    sendRequestWrapper(index++)
}, 100)
