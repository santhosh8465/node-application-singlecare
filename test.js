// const https = require("https");
//
// const url = "https://webapi.singlecare.com/api/pbm/tiered-pricing/65162003311?qty=20&zipCode=08873";
//
// https.get(url, res => {
//     res.setEncoding("utf8");
//     let body = "";
//     res.on("data", data => {
//         body += data;
//     });
//     res.on("end", () => {
//         body = JSON.parse(body);
//         console.log(body);
//     });
// });

// const request = require("request")
//
// const url = "https://webapi.singlecare.com/api/pbm/tiered-pricing/65162003311?qty=20&zipCode=08873";
//
// request({
//     url: url,
//     json: true
// }, function (error, response, body) {
//
//     if (!error && response.statusCode === 200) {
//         console.log(body) // Print the json response
//     }
// })

const request = require("request");

const url = "https://webapi.singlecare.com/api/pbm/tiered-pricing/65162003311?qty=20&zipCode=08873";

//const data="";
request({
    url: url,
    headers: {
        'Connection': 'keep-alive'
    }
}, function (error, response,body) {
    //let data;
    if (!error && response.statusCode === 200) {
        JSON.parse(body);
        console.log(body);
    }
});


