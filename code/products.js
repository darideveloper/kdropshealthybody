const products_btns = document.querySelectorAll (".products > button.card")
const products_modals_wrapper = document.querySelector (".products .wrapper-modal")
const products_modals = document.querySelectorAll (".products article.modal")
const products_close_btns = document.querySelectorAll (".products article.modal .close")

// Add event to each product botton, for show modal
for (let product_btn of products_btns) {
    product_btn.addEventListener ("click", function (e) {
        let product_number = (product_btn.classList[1].charAt(product_btn.classList[1].length-1)) - 1

        products_modals_wrapper.classList.remove ("hide")
        products_modals[product_number].classList.remove ("hide")
        products_modals[product_number].setAttribute ("role", "alert")
    })
}

// Add event to ech close button, for close modals
for (let product_close_btn of products_close_btns) {
    product_close_btn.addEventListener ("click", function () {
        products_exit_modal ()
    })
}

// Detect event key "scape" for close modal
document.addEventListener('keydown', (event) => {
        
    if (event.key === 'Escape') {
        products_exit_modal ()
    }
});

// Detect outside click for close modal
products_modals_wrapper.addEventListener ("click", function (e) {
    if (e.target.classList.contains ("wrapper-modals")) {
        products_exit_modal ()
    }
})

function products_exit_modal () {
    // Function for close modal
    products_modals_wrapper.classList.add ("hide")

    for (let product_modal of products_modals) {
        product_modal.classList.add ("hide")
        product_modal.removeAttribute ("role")
    }
}