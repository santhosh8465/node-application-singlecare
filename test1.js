const x = {
    "Result": {
        "NDC": "65162003311",
        "Quantity": 20,
        "PharmacyPricings": [
            {
                "Pharmacy": {
                    "NABP": "3195131",
                    "Name": "CVS Pharmacy",
                    "Address": {
                        "AddressId": 0,
                        "AddressGuid": "32abec2a-1fb8-42b4-b036-06000d5e6359",
                        "Address1": "462 Elizabeth Avenue",
                        "Address2": "",
                        "City": "Somerset",
                        "State": "NJ",
                        "PostalCode": "088731220",
                        "CreateDate": "2019-07-10T22:10:12.4824458Z",
                        "ModifiedDate": "2019-07-10T22:10:12.4824458Z",
                        "Latitude": 40.52897,
                        "Longitude": -74.54109,
                        "DoValidation": true,
                        "DoMelissaValidation": true,
                        "IsEmpty": false,
                        "IsComplete": true,
                        "FullAddress": "462 Elizabeth Avenue, , Somerset, NJ, 088731220",
                        "AllowOnlyState": false
                    },
                    "Distance": 2.28557195621453,
                    "NcpdpChaincode": "039",
                    "GetPreferredPBAClient": 4,
                    "LogoUrl": "https://static-singlecare.s3.amazonaws.com/content/images/pharmacy/logo-color-cvs.svg",
                    "NPI": "1518127885"
                },
                "Prices": [
                    {
                        "PBAClientId": 4,
                        "PBAClientName": "CVS",
                        "PartnerUser": "SingleCare CVS",
                        "PartnerPassword": "1B6AE476-B88B-4885-A388-407E2A260DB",
                        "RequiresMembership": false,
                        "Price": "7.74",
                        "ExclusivePriceDetails": null,
                        "FormattedPrice": "7.74",
                        "UsualAndCustomary": 15.69,
                        "PercentageSavings": "50.67 %"
                    }
                ]
            },
            {
                "Pharmacy": {
                    "NABP": "3145946",
                    "Name": "Walgreens",
                    "Address": {
                        "AddressId": 0,
                        "AddressGuid": "792e4e8c-aaf4-4271-8f09-263835f61e81",
                        "Address1": "920 Hamilton St",
                        "Address2": "",
                        "City": "Somerset",
                        "State": "NJ",
                        "PostalCode": "08873",
                        "CreateDate": "2019-07-10T22:10:12.4824458Z",
                        "ModifiedDate": "2019-07-10T22:10:12.4824458Z",
                        "Latitude": 40.48672,
                        "Longitude": -74.48347,
                        "DoValidation": true,
                        "DoMelissaValidation": true,
                        "IsEmpty": false,
                        "IsComplete": true,
                        "FullAddress": "920 Hamilton St, , Somerset, NJ, 08873",
                        "AllowOnlyState": false
                    },
                    "Distance": 2.64062161242539,
                    "NcpdpChaincode": "226",
                    "GetPreferredPBAClient": 12,
                    "LogoUrl": "https://static-singlecare.s3.amazonaws.com/content/images/pharmacy/logo-color-walgreens.svg",
                    "NPI": "1083629976"
                },
                "Prices": [
                    {
                        "PBAClientId": 12,
                        "PBAClientName": "SingleCare",
                        "PartnerUser": "SingleCare Rx",
                        "PartnerPassword": "AH@ldNiBqj#|k0M",
                        "RequiresMembership": false,
                        "Price": "9.26",
                        "ExclusivePriceDetails": null,
                        "FormattedPrice": "9.26",
                        "UsualAndCustomary": 15.69,
                        "PercentageSavings": "40.98 %"
                    }
                ]
            },
            {
                "Pharmacy": {
                    "NABP": "3154313",
                    "Name": "Rite Aid featuring a Walgreens Pharmacy",
                    "Address": {
                        "AddressId": 0,
                        "AddressGuid": "79ec75be-d081-4151-85f0-b29feae06b64",
                        "Address1": "231 Prospect Street",
                        "Address2": "",
                        "City": "South River",
                        "State": "NJ",
                        "PostalCode": "08882",
                        "CreateDate": "2019-07-10T22:10:12.4824458Z",
                        "ModifiedDate": "2019-07-10T22:10:12.4824458Z",
                        "Latitude": 40.4556,
                        "Longitude": -74.39179,
                        "DoValidation": true,
                        "DoMelissaValidation": true,
                        "IsEmpty": false,
                        "IsComplete": true,
                        "FullAddress": "231 Prospect Street, , South River, NJ, 08882",
                        "AllowOnlyState": false
                    },
                    "Distance": 7.89577566331161,
                    "NcpdpChaincode": "226",
                    "GetPreferredPBAClient": 12,
                    "LogoUrl": "https://static-singlecare.s3.amazonaws.com/content/images/pharmacy/logo-color-riteaid-walgreens.png",
                    "NPI": "1649795253"
                },
                "Prices": [
                    {
                        "PBAClientId": 12,
                        "PBAClientName": "SingleCare",
                        "PartnerUser": "SingleCare Rx",
                        "PartnerPassword": "AH@ldNiBqj#|k0M",
                        "RequiresMembership": false,
                        "Price": "9.26",
                        "ExclusivePriceDetails": null,
                        "FormattedPrice": "9.26",
                        "UsualAndCustomary": 15.69,
                        "PercentageSavings": "40.98 %"
                    }
                ]
            }
        ],
        "IsLegalEligible": false
    },
    "ErrorOccurred": false,
    "ErrorMessage": null,
    "ErrorSeverity": "None",
    "ResponseText": null,
    "StatusCode": 0
}



console.log(x.Result.PharmacyPricings[0].Prices[0].Price);