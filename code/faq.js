const faq_buttons = document.querySelectorAll (".faq button")
const faq_answers = document.querySelectorAll (".faq p")

for (let faq_button of faq_buttons) {
    faq_button.addEventListener ("click", function (e) {

        // Get answer element
        faq_class = faq_button.classList[0]
        selector_answer = ".faq-answer." + faq_class
        elem_answer = document.querySelector (selector_answer)

        if (elem_answer.classList.contains ("colapsed")) {
            // Show answer
            elem_answer.classList.remove ("colapsed") 

            // Update status of button to open
            faq_button.classList.add ("open")
        } else {
            // Hide answer
            elem_answer.classList.add ("colapsed") 

            // Update status of button to close
            faq_button.classList.remove ("open")
        }
    })
}

function hide_answers () {
    for (let faq_answer of faq_answers) {
        faq_answer.classList.add ("colapsed")
    }
}