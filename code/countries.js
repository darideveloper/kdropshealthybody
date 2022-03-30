// Debug lines
document.cookie = "country=mx"

function update_prices () {
    
    // Prices
    var prices = {
        "co": {
            1: "50.000",
            3: "120.000 pesos"
        },
        "usa": {
            1: "80 USD",
            2: "120,00 USD"
        },
        "ec": {
            1: "40 USD",
            3: "80 USD"
        },
        "pa": {
            1: "40 USD",
            3: "80,00 USD"
        },
        "ch": {
            1: "30.000 CLP",
            3: "70.000 Pesos Chilenos"
        },
        "ar": {
            1: "3.080 ARS",
            3: "7.700 Pesos"
        },
        "pe": {
            1: "81,4 Soles",
            3: "203,5 Soles"
        },
        "mx": {
            1: "1320 Pesos mxn",
            3: "3.700 Pesos mxn"
        },
    }
    
    // Get country
    var country = document.cookie
    
    if (country) {
        // Get country code
        var country_code = country.substring(country.length-2, country.length)
        var current_price = prices[country_code]
        console.log (current_price)
    
    } else {
        // Show prices modal

        // Update Prices
        update_prices ()
    
    }
    
}

update_prices ()