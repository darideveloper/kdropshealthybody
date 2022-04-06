const header_menu_button = document.querySelector ("header button.menu")
const header_menu_close = document.querySelector ("header .close")
const header_menu = document.querySelector ("header nav")

console.log ()

// Open menu
header_menu_button.addEventListener ("click", function (e) {
    header_menu.classList.remove ("collapsed")
})

// Fix link
header_menu.addEventListener ("click", function (e) {
    console.log (["li", "use", "svg"].includes (e.target.tagName.toLowerCase()))
})

// Close menu
header_menu_close.addEventListener ("click", function (e) {
    header_menu.classList.add ("collapsed")
})