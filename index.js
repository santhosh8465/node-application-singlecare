const express = require('express')
const bodyParser = require('body-parser')
const https = require('https');
const app = express()
const port = 3000
const axios = require('axios');//const db = require('./queries')
//const res = require('./queries')
//const res = require('./queries')
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'apidb',
    password: 'test123',
    port: 5432,
})
const data = {
    id : 1001,
    price : "",
    programid : 102,
    drugprogramid : 103,
    createdat : '1963-06-16',
}
const results="";
let res="";
let body = "";
let price = "";
let status = "";
const fetchPrice = (request, response) => {
    pool.query('select * from drugmasterdetails ', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        res = results.rows;
        // if(id in programmaster == programid in data && id=true){
//     then fetch data by accessing the url
        pool.query('select isActive from programmaster where id = 102', (error, results) => {
            if (error) {
                throw error
            }
            //response.status(200).json(results.rows)
            res = results.rows[0].isactive;
            // let status=res.isactive;
            //console.log(results.rows[0].isactive);
            //console.log(res);
        });
        // end of testing status
        for (let i = 0; i < res.length; i++) {
            //const url = "https://api.uspharmacycard.com/drug/price/147/none/" + res[i].zipcode + "/" + res[i].ndc + "/" + encodeURIComponent(res[i].name) + "/" + res[i].drugtype + "/" + res[i].quantity + "/8"
            //const url = "https://api.uspharmacycard.com/drug/price/147/none/08823/00378395277/Atorvastatin%20Calcium/GENERIC/30/8";
            const url = "https://webapi.singlecare.com/api/pbm/tiered-pricing/"+res[i].ndc+"?qty="+res[i].quantity+"&zipCode="+res[i].zipcode;
            //console.log(url);
            const request = require("request");
            //const url = "https://webapi.singlecare.com/api/pbm/tiered-pricing/65162003311?qty=20&zipCode=08873";
            request({
                url: url,
                headers: {
                    'Connection': 'keep-alive'
                }
            }, function (error, response,body) {
                //let data;
                if (!error && response.statusCode === 200) {
                    let res = JSON.parse(body);
                    //console.log(res);
                    data.price = res.Result.PharmacyPricings[0].Prices[0].Price
                    //console.log(data.price.Result.PharmacyPricings[0].Prices[0].Price);
                    const query2 = 'INSERT INTO price(id, price, programid, drugprogramid, createdat) VALUES($1,$2,$3,$4,$5) RETURNING *';
                    const values = [data.id, data.price, data.programid, data.drugprogramid, data.createdat];
                    pool.query(query2, values, (error, result) => {
                        if (error) {
                            throw error;
                                }
                        });


                }
            });

            // https.get(url, res => {
            //     res.setEncoding("utf8");
            //     let body = "";
            //     res.on("data", data => {
            //         body += data;
            //     });
            //     res.on("end", () => {
            //         body = JSON.parse(body);
            //         //console.log(body);
            //         //console.log(url);
            //         //data.price = body.PharmacyPricings.Prices.price;
            //         //data.price = parseFloat(data.price.replace('$', ''));
            //         //console.log("price " +data.price);
            //
            //         const query2 = 'INSERT INTO price(id, price, programid, drugprogramid, createdat) VALUES($1,$2,$3,$4,$5) RETURNING *';
            //         const values = [data.id, data.price, data.programid, data.drugprogramid, data.createdat];
            //         // pool.query(query2, values, (error, result) => {
            //         //
            //         //     if (error) {
            //         //         throw error;
            //         //     }
            //         // });
            //     });
            // });
            // axios.get('https://webapi.singlecare.com/api/pbm/tiered-pricing/"+res[i].ndc+"?qty="+res[i].quantity+"&zipCode="+res[i].zipcode')
            //     .then(response => {
            //         console.log(response.data.url);
            //         console.log(response.data);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });

        }
    })
}
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    response.json({ info: 'test API' })
})
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
app.get('/fetch', fetchPrice)

