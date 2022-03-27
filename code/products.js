const products_btns = document.querySelectorAll (".products > button.card")
const products_modals_wrapper = document.querySelector (".products .wrapper-modals")
const products_modals = document.querySelectorAll (".products article.modal")
const products_close_btns = document.querySelectorAll (".products article.modal .close")

// Add event to each product botton, for show modal
for (let product_btn of products_btns) {
    product_btn.addEventListener ("click", function (e) {
        let product_number = (product_btn.classList[1].charAt(product_btn.classList[1].length-1)) - 1
        console.log (product_number)

        products_modals_wrapper.classList.remove ("hide")
        products_modals[product_number].classList.remove ("hide")
    })
}

// Add event to ech close button, for close modals
for (let product_close_btn of products_close_btns) {
    product_close_btn.addEventListener ("click", function () {
        products_modals_wrapper.classList.add ("hide")

        for (let product_modal of products_modals) {
            product_modal.classList.add ("hide")
        }

    })
}
