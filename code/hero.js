const hero_gallery_next = document.querySelector (".hero .gallery .right")
const hero_gallery_back = document.querySelector (".hero .gallery .left")
const gallery_first_image = document.querySelector (".hero .gallery ul li:first-child")
const gallery_images = ["gallery 1.jpg", "gallery 2.jpg"]
var current_image = 0
var gallery_runnig = false

hero_gallery_next.addEventListener ("click", function (e) {
    // Update status
    gallery_runnig = true

    // Incress image counter
    current_image ++
    if (current_image >= gallery_images.length) {
        current_image = 0
    }

    // Update image
    gallery_update ()

})

hero_gallery_back.addEventListener ("click", function (e) {
    // Update status
    gallery_runnig = true

    // Incress image counter
    current_image --
    if (current_image < 0 ) {
        current_image = gallery_images.length - 1
    }

    // Update image
    gallery_update ()
})

async function gallery_update () {

    // Start fade
    hero_gallery_next.setAttribute ("disabled", true)

    // Calculate margin and set it for slide
    let margin_feft = -100*current_image + "vw"
    gallery_first_image.style.marginLeft = margin_feft

    // End fade
    hero_gallery_next.removeAttribute ("disabled")

    // Update status
    gallery_runnig = false
}