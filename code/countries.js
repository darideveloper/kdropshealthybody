// Debug lines
// document.cookie = "country=mx"

var countries_buttons = document.querySelectorAll (".countries .modal .buttons button")
var countries_modal = document.querySelector (".countries")

// Add selectors for countries buttons
for (let country_button of countries_buttons) {
    country_button.addEventListener("click", function (e) {

        // Save cookie of country code
        country_code = country_button.classList[1]
        document.cookie = "country=" + country_code

        // Refresh page
        location.reload ()
    })
}

function update_prices () {
    
    // Prices
    var prices = {
        "co": {
            "1": "$50.000 Pesos",
            "3": "$120.000 Pesos"
        },
        "us": {
            "1": "$80 USD",
            "3": "$120,00 USD"
        },
        "ec": {
            "1": "$40 USD",
            "3": "$80 USD"
        },
        "pa": {
            "1": "$40 USD",
            "3": "$80,00 USD"
        },
        "ch": {
            "1": "$30.000 CLP",
            "3": "$70.000 Pesos Chilenos"
        },
        "ar": {
            "1": "$3.080 ARS",
            "3": "$7.700 Pesos"
        },
        "pe": {
            "1": "$81,4 Soles",
            "3": "$203,5 Soles"
        },
        "mx": {
            "1": "$1320 Pesos mxn",
            "3": "$3.700 Pesos mxn"
        },
    }
    
    // Get country
    var country = document.cookie
    
    if (country) {
        // Get country code
        var country_code = country.substring(country.length-2, country.length)
        var current_price_one = prices[country_code]["1"]
        var current_price_three = prices[country_code]["3"]

        // Update data in page
        selector_price_one = ".price-one"
        selector_price_three = ".price-three"
        elems_price_one = document.querySelectorAll(selector_price_one)
        elems_price_three = document.querySelectorAll(selector_price_three)

        console.log (elems_price_one, elems_price_three)

        for (elem_price_one of elems_price_one) {
            elem_price_one.innerHTML = current_price_one
        }

        for (elem_price_three of elems_price_three) {
            elem_price_three.innerHTML = current_price_three
        }

    } else {
        // Show countries modal
        countries_modal.classList.remove('hide')
    }
}

update_prices ()