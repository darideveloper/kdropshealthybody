const check_input = document.querySelector (".checker input")
const check_btn = document.querySelector (".checker button")
const check_alert = document.querySelector (".checker .alert")
const check_p_correct = document.querySelector (".checker p.correct")
const check_p_wrong = document.querySelector (".checker p.wrong")
const checki_start_num = 2531100 
const checki_end_num = 2534150
var check_numer

check_input.addEventListener ("input", function (e) {
    check_numer = check_input.value

    if (check_numer) {
        toggle_check_button (true)
    } else {
        toggle_check_button (false)
    }
} )

check_btn.addEventListener ("click", function (e) {
    // Validate number
    let number_valid = false
    if (check_numer >= checki_start_num && check_numer <= 2534150) {
        number_valid = true
    }

    show_check_alert (number_valid)
    
})

function toggle_check_button (active) {
    // Activate or deactive button

    if (active) {
        check_btn.removeAttribute ("disabled", "true")
    } else {
        check_btn.setAttribute ("disabled", "true")
    }
}

function show_check_alert (number_valid) {

    hide_alert_elems ()

    // Show alert
    if (number_valid) {
        check_alert.classList.add ("correct")
        check_p_correct.classList.remove ("hide")
    } else {
        check_alert.classList.add ("wrong")
        check_p_wrong.classList.remove ("hide")
    }
}

function hide_alert_elems () {
    // Hide all elements for the alert
    check_alert.classList.remove ("correct")
    check_alert.classList.remove ("wrong")
    check_p_correct.classList.add ("hide")
    check_p_wrong.classList.add ("hide")
}