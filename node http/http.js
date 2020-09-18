var request = require('request');
var options = {
    method: 'post',
    url: u,
    form: content,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

request(options, function (err, res, body) {
    if (err) {
        console.log(err)
    } else {
        console.log(body);
    }
})
